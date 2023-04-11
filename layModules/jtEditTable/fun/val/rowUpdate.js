import { data, dataChange, date_key_obj, def_data_tr, isInit, selectData, third_form, tr_key, tr_templet_key } from "../../var/index"
import { getInputElem, getTrElem, getTrIndex } from "../other/getElem"
import { closeZzc, openZzc } from "../other/zzc"
import { dealVal } from "./dealVal"
import { renderSelect, renderSelects } from "../render/renderSelect"

export function rowUpdate(d, i) {
  openZzc()
  return getTrIndex(i, '未获取到要更新的操作行').then(i => {
    let old = data[i]
    d = Object.assign({}, def_data_tr, d)
    data[i] = d
    getChangeCols(d, old, i)
  }).finally(closeZzc)
}
export function setColValue(key, v, i, tr) {
  if (key == 'sxrq') {
    console.warn(v)
  }
  if (selectData?.[key]) {
    let keys = []
    return renderSelect(key, tr, v, keys).then(() => renderSelects(i, keys, tr))
  } else if (date_key_obj[key] || (tr_templet_key && tr_templet_key.name && tr_templet_key.name[key])) {
    let td = getInputElem(tr, key).parents('td'), param = {}
    param[key] = v
    third_form.val(td, param)
  } else if (tr_templet_key && tr_templet_key.nameH && tr_templet_key.nameH[key]) {
    tr.find(`[nameH="${key}"]`).html(v)
  } else {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        tr.find(`>td[data-field=${key}]>.layui-table-cell`).html(v)
      }, 0);
    })
  }
  return Promise.resolve()
}
function getChangeCols(d, o, i, tr) {
  let v = JSON.parse(JSON.stringify(d))
  tr = tr || getTrElem(i)
  tr_key.forEach(key => {
    if (d[key] !== o[key]) {
      setColValue(key, dealVal(d[key]), i, tr)
      if (isInit) {
        dataChange(key, v, o[key], i, tr)
      }
    }
  })
  if (isInit) {
    isInit = false
    getChangeCols(v, d, i, tr)
  } else {
    isInit = true
  }
}
import { dataChange, date_key_obj, def_data_tr, isInit, selectData, third_form, tr_key, tr_templet_key } from "../../var/index"
import { getInputElem, getTrElem, getTrIndex } from "../other/getElem"
import { endRender, startRender } from "../render/render"
import { renderSelect, renderSelects } from "../render/renderSelect"
import { trDataV } from "./trDataV"

export function rowUpdate(d, i) {
  startRender()
  return getTrIndex(i, '未获取到要更新的操作行').then(i => {
    let old = trDataV(i)
    d = Object.assign({}, def_data_tr, d)
    trDataV(i, undefined, d)
    getChangeCols(d, old, i)
  }).finally(endRender)
}
export function setColValue(key, v, i, tr) {
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
export function getChangeCols(d, o, i, tr, keys) {
  let v = JSON.parse(JSON.stringify(d))
  keys = keys || tr_key
  tr = tr || getTrElem(i)
  keys.forEach(key => {
    setChangeColV(i, key, v, o, tr)
  })
  if (dataChange) {
    if (isInit) {
      isInit = false
      getChangeCols(v, d, i, tr)
    } else {
      isInit = true
    }
  }
}
export function setChangeColV(i, key, v, o, tr) {
  if (v[key] != o[key]) {
    setColValue(key, v[key], i, tr);
    if (isInit && dataChange) {
      dataChange(key, v[key], o[key], i, tr);
    }
  }
}
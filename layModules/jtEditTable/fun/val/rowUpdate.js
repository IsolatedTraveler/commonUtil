import { data, def_data_tr, selectData, tr_key, tr_templet_key } from "../../var/index"
import { getInputElem, getTrElem, getTrIndex } from "../other/getElem"
import { closeZzc, openZzc } from "../other/zzc"
import { dealVal } from "./dealVal"
import { renderSelect, renderSelects } from "./renderSelect"

export function rowUpdate(d, i) {
  openZzc()
  return getTrIndex(i, '未获取到要更新的操作行').then(i => {
    let old = data[i]
    d = Object.assign({}, def_data_tr, d)
    data[i] = d
    getChangeCols(d, old, i)
  }).finally(closeZzc)
}
function setColValue(key, v, i, tr) {
  if (selectData?.[key]) {
    let keys = []
    return renderSelect(key, tr, v, keys).then(() => renderSelects(i, keys, tr))
  } else if (tr_templet_key && tr_templet_key.name && tr_templet_key.name[key]) {
    getInputElem(tr, key).val(v)
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
function getChangeCols(d, o, i) {
  let tr = getTrElem(i) 
  tr_key.forEach(key => {
    if (d[key] !== o[key]) {
      setColValue(key, dealVal(d[key]), i, tr)
    }
  })
}
import { changeData, data, dataChange, date_key_obj, def_data_tr, isInit, select_key_yxj, third_form, tr_key, tr_templet_key } from "../../var/index";
import { getInputElem } from "../other/getElem";
import { endRender, startRender } from "../other/changeIsInit";
import { renderSelect, renderSelects } from "../render/renderSelect";
import { trDataV } from "./trDataV";

export function valCol(tr, i, key, v) {
  let trData = data[i] || def_data_tr, val = JSON.parse(JSON.stringify(trData))
  val[key] = v
  return valChanges([key], val, trData, i, tr, true)
}
export function valChanges(keys, v, o, i, tr, judge) {
  let old = JSON.parse(JSON.stringify(v)), arr = keys.map(key => {
    return val(i, key, v, o[key], tr, judge)
  }).filter(it => it)
  if (arr.length) {
    return Promise.all(arr).then((res) => {
      res = res.filter(it => it)
      if (res.length) {
        startRender('valChanges')
        return valChanges(tr_key, v, old, i, tr).finally(() => endRender('valChanges'))
      }
    })
  }
  return Promise.resolve()
}
function val(i, key, v, o, tr, judge) {
  if (o != v[key]) {
    trDataV(i, key, v[key])
    return setColVal(i, key, tr, v, judge).then((res) => {
      if (isInit) {
        if (changeData[key]) {
          return changeData[key](v, o, i, tr, key) || true;
        } else if (dataChange) {
          return dataChange(key, v, o, i, tr) || true;
        }
      }
    })
  }
}
export function setColVal(i, key, tr, v, judge) {
  if (judge) {
    if (select_key_yxj && select_key_yxj[key] && select_key_yxj[key].c) {
      return renderSelects(i, select_key_yxj[key].c, tr, v).finally(res => true)
    }
  } else {
    if (select_key_yxj && select_key_yxj[key]) {
      let keys = []
      return renderSelect(key, tr, v[key], keys, v).then(() => renderSelects(i, keys, tr, v)).finally(res => true)
    } else if (date_key_obj[key] || (tr_templet_key && tr_templet_key.name && tr_templet_key.name[key])) {
      let td = getInputElem(tr, key).parents('td'), param = {}
      param[key] = v[key]
      third_form.val(td, param)
    } else if (tr_templet_key && tr_templet_key.nameH && tr_templet_key.nameH[key]) {
      tr.find(`[nameH="${key}"]`).html(v[key])
    } else {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          tr.find(`>td[data-field=${key}]>.layui-table-cell`).html(v[key])
          resolve()
        }, 0);
      })
    }
  }
  return Promise.resolve()
}
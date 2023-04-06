import { data, elem_p, selectData, select_key_yxj } from "../../var/index";
import { dealVal } from "./dealVal";

export function renderSelects(i, keys, tr) {
  tr = tr || elem_p.find(`[data-index=${i}]`)
  let trData = data[i], min = 100
  keys.forEach(key => min = Math.min(min,select_key_yxj[key].yxj))
  let not = keys.filter(key => select_key_yxj[key].yxj > min)
  keys = keys.filter(key => select_key_yxj[key].yxj = min)
  return keys ? Promise.all(keys.map(key => {
    let option = selectData[key], o = dealVal(trData[key]), v = dealVal(o || option.default)
    if (v) {
      renderSelect()
    } else {
      bindSelectEvent()
    }
  })).then(() => not.length ? renderSelects(i, not, tr) : '') : Promise.resolve()
}
function renderSelect() {
  
}
function bindSelectEvent() {
  
}
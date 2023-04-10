import { data, select_key_yxj } from "../../var/index";
import { dealVal } from "./dealVal";
import { renderSelects } from "./renderSelect";
import { setColValue } from "./rowUpdate";

export function formChange(tr, i, elem, key) {
  let trData = data[i]
  if (key) {
    let el = $(elem), v = dealVal(el.val())
    if (elem.tagName === 'SELECT') {
      let mc = el.attr('jt-mc')
      if (mc) {
        trData[mc] = v ? el.next().find('input').val() : ''
      }
    }
    if (v != trData[key]) {
      setColValue(key, v, i, tr)
      if (select_key_yxj?.[key]?.c) {
        return renderSelects(i, select_key_yxj[key].c, tr)
      }
    }
  }
  return Promise.resolve()
}
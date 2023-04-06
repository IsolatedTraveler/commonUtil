import { data } from "../../var/index";
import { dealVal } from "./dealVal";

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
  }
  return Promise.resolve()
}
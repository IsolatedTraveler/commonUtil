import { mcInputElem, multElem, multi, valElem } from "../var/index";

export function deleteVal(el) {
  let val = [], mc = []
  el.remove();
  multElem.find('[lay-value]').each(function(i, el) {
    let elem = $(el)
    val.push(elem.attr('lay-value'))
    mc.push(elem.text())
  })
  valElem.val(val.join(multi))
  mcInputElem.val(mc.join(multi))
}
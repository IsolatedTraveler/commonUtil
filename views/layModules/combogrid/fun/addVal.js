import { multElem, multi, mcInputElem, showId, valElem, valId, searchElem } from "../var/index"

export function addVal(data, o, v) {
  let mc = mcInputElem.val() || '', m = data[showId]
  if (o === undefined) {
    o = (valElem.val() || '').split(multi)
    v = data[valId]
  }
  mc = mc.split(multi).filter(it => it)
  o = o.filter(it => it)
  o.push(v)
  mc.push(m)
  searchElem.val('')
  valElem.val(o.join(multi))
  mcInputElem.val(mc.join(multi))
  multElem.find('input:first').before('<span class="jt-flex" row lay-value="' + v + '">' + m + '<i class="jt-icon jt-icon-close"></i></span>')
  valElem.trigger('change')
  mcInputElem.trigger('change')
}
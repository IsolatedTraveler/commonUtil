import { mcInputElem, multElem, valElem } from "../var/index"

export function clearVal() {
  multElem.find('span[lay-value]').remove()
  valElem.val('')
  mcInputElem.val('')
  valElem.trigger('change')
  mcInputElem.trigger('change')
}
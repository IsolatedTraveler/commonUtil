import { isMulti, multElem, selectedData, showId, valId } from "../var/index"

export function getMultiVal() {
  if (isMulti) {
    return [].map.call(multElem.find('[lay-value]'), el => {
      let d = {}
      d[showId] = el.innerText
      d[valId] = $(el).attr('lay-value')
      return d
    })
  }
}
export function getSelectedData() {
  return selectedData
}
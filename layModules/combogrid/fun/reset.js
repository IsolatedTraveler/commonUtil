/* eslint-disable no-unused-vars */
import { isPop, layerCont, pageNumber, popElem, searchElem, selectedI, total } from "../var/index"

export function reset(page = 1, t = 0, judge = false) {
  isPop && layerCont.css('overflow', '')
  popElem.hide()
  pageNumber = page
  total = t
  selectedI = 0
  searchElem.focus()
  isPop = judge
}
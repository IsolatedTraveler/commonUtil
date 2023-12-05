/* eslint-disable no-unused-vars */
import { isPop, layerCont, pageNumber, popElem, searchElem, selectedI, total } from "../var/index"

export function reset(page = 1, t = 0, judge = false) {
  pageNumber = page;
  total = t;
  isPop = judge;
  if (!judge) {
    isPop && layerCont.css('overflow', '');
    popElem.hide();
    selectedI = 0;
    searchElem.focus();
  }
}
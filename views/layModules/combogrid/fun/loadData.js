import { complete, data, isUpper, loadDataCall, popElem, searchElem, size, tableCom } from "../var/index";
import { reset } from "./reset";

export function loadData(page, size1) {
  let jsm = searchElem.val()
  if (isUpper) {
    jsm = jsm.toString().toUpperCase()
  }
  return loadDataCall({jsm, page, size: size1 || size}).then(({list, rows, total}) => {
    if (total) {
      reset(page, total, true)
      data = list || rows
      tableCom.reload({
        data,
        count: total,
        page: {
          count: total,
          curr: page
        }
      })
      if (complete) {
        if (total == 1) {
          setTimeout(() => {
            popElem.find(`tr[data-index="0"]`).trigger('click')
          }, 0);
        } else {
          popElem.find(`tr[data-index="0"]`).addClass('jt-selected')
        }
      }
    } else {
      return Promise.reject()
    }
  })
}
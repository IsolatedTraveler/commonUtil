import { isInit } from "../../var/index"
import { addRow } from "../other/addRow"
import { getInputElems } from "../other/getElem"

export function editCol(e) {
  if (isInit) {
    let el = $(e.currentTarget), tr = el.parents('tr[data-index]').eq(0), i = tr.attr('data-index'), key = el.attr('name')
    console.log(i, key)
  }
}
export function colKeyup(e) {
  if (isInit && e.keyCode === 13) {
    let tr = $(e.target).parents('tr'), lastElem = getInputElems(tr).last()[0]
    if (e.target == lastElem || e.target.parentElement == lastElem) {
      setTimeout(() => {
        let tr1 = $(d.activeElement).parents('tr')
        if (tr[0] != tr1[0]) {
          tr1.trigger('click')
        }
      }, 50)
    }
  }
}
export function lastRowColKeyup(e) {
  if (isInit && e.keyCode === 13) {
    let tr = $(e.target).parents('tr'), lastElem = getInputElems(tr).last()[0]
    if (e.target == lastElem || e.target.parentElement == lastElem) {
      addRow()
    }
  }
}
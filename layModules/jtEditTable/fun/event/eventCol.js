import { isInit } from "../../var/index"
import { getInputElems } from "../other/getElem"
import { valCol } from "../val/valCol"

export function eventEditColTd(res) {
  if (isInit) {
    let key = res.field, tr = res.tr, i = tr.attr('data-index'), v = res.value
    return valCol(tr, i, key, v)
  }
  return Promise.resolve()
}
export function eventEditInputCol(e) {
  if (isInit) {
    let el = $(e.currentTarget), tr = el.parents('tr[data-index]').eq(0), i = tr.attr('data-index'), key = el.attr('name')
    return valCol(tr, i, key, el.val())
  }
  return Promise.resolve()
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
import { data } from "../../var/index"
import { getTrElem } from "../other/getElem"
import { trDataV } from "../val/trDataV"
export function rowDel(i) {
  let tr = getTrElem(i), next = tr.nextAll(), d = data.splice(i, 1)
  tr.remove()
  next.each((i, e) => {
    let el = $(e), elmes = el.find('.laytable-cell-numbers')
    i = el.index()
    el.attr('data-index', i)
    elmes.each((i, e) => {
      let key = $(e).parents('td').eq(0).attr('data-field'), xh = (e.innerHTML - 1).toString()
      trDataV(i, key, xh)
      e.innerHTML = xh
    })
  })
  return d[0]
}
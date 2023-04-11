import { forbidAdd, selected_tr, third_layer,data } from "../../var/index";
import { fixedPosition } from "../other/fixedPosition";
import { getTrElem } from "../other/getElem";
import { getTrIndex } from "../other/getElem";
import { trDataV } from "../val/trDataV";
import { updateRow } from "./updateRow";

export function rowDel(i) {
  return getTrIndex(i, '未获取到选中行').then(i => {
    if (i == data.length -1 && !forbidAdd) {
      return updateRow({}, i)
    } else {
      let tr = getTrElem(i), next = tr.nextAll(), d = data.splice(i, 1)
      tr.remove()
      next.each((i, e) => {
        let el = $(e), elmes = el.find('.laytable-cell-numbers')
        i = el.index()
        el.attr('data-index', i)
        elmes.each((i,e) => {
          let key = $(e).parents('td').eq(0).attr('data-field'), xh = (e.innerHTML - 1).toString()
          trDataV(i, key, xh)
          e.innerHTML = xh
        })
      })
      return d[0]
    }
  })
}
export function delRow() {
  if (selected_tr) {
    return delRow(selected_tr.index).then(res => {
      fixedPosition(selected_tr.index)
      return res
    })
  } else {
    third_layer.alert('未获取到当前操作行', function(i) {
      third_layer.close(i)
    })
    return Promise.reject()
  }
}
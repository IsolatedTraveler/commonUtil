import { cols, data, elem, elem_p, eTable, limit, name, select_key, skin, third_form, third_table } from "../../var/index"
import { loaded } from "../initReload/loaded"
import { getElem, getTrElem } from "../other/getElem"
import { renderCombogrids } from "../val/renderCombogrid"
import { renderDate } from "../val/renderDate"
import { renderSelects } from "../val/renderSelect"

export function initTable() {
  return new Promise((resolve, reject) => {
    eTable = third_table.render({
      elem,
      id: name,
      height: elem_p.height(),
      done(res, pageNumber, rowCount) {
        tableLoaded(res,pageNumber, rowCount).finally(resolve())
      },
      cols,
      data: JSON.parse(JSON.stringify(data)),
      page: false,
      limit,
      skin
    })
  }).finally(() => {
    loaded()
    console.log(eTable)
  })
}
export function tableLoaded(res, pageNumber, rowCount) {
  let rData = res.data, count = rData.length, start = rowCount - count
  getElem()
  return Promise.all(rData.map((trData,i)  => {
    return renderTr(start + i, trData)
  }))
}
export function renderTr(i, data) {
  let tr = getTrElem(i)
  third_form.render('', tr)
  third_form.val(tr, data)
  return Promise.all([renderDate(tr, i), renderCombogrids(tr, i), renderSelects(i, select_key, tr)])
}
/* eslint-disable no-unused-vars */
import { cols, data, elem, elem_p, eTable, limit, name, select_key, skin, table_resolve, third_form, third_table } from "../../var/index"
import { tableLoaded } from "../initReload/tableLoaded"
import { getElem, getTrElem } from "../other/getElem"
import { renderCombogrids } from "./renderCombogrid"
import { renderDates } from "./renderDate"
import { renderSelects } from "./renderSelect"

export function renderTable() {
  return new Promise((resolve, reject) => {
    table_resolve = resolve
    eTable = third_table.render({
      elem,
      id: name,
      height: elem_p.height(),
      done: tableDone,
      cols,
      data: JSON.parse(JSON.stringify(data)),
      page: false,
      limit,
      skin
    })
  }).finally(tableLoaded)
}
export function tableDone(res, pageNumber, rowCount) {
  let rData = res.data, count = rData.length, start = rowCount - count
  getElem()
  return Promise.all(rData.map((trData, i) => {
    return renderTr(start + i, trData)
  })).then(() => {
    table_resolve && table_resolve()
  })
}
export function renderTr(i, data) {
  let tr = getTrElem(i)
  third_form.render('', tr)
  third_form.val(tr, data)
  return Promise.all([renderDates(tr, i), renderCombogrids(tr, i), renderSelects(i, select_key, tr)])
}
/* eslint-disable no-unused-vars */
import { cols, data, elem, elem_p, eTable, limit, name, select_key, skin, table_resolve, third_form, third_table } from "../../var/index"
import { loaded } from "../initReload/loaded"
import { getElem, getTrElem } from "../other/getElem"
import { renderCombogrids } from "./renderCombogrid"
import { renderDate } from "./renderDate"
import { renderSelects } from "./renderSelect"

export function renderTable() {
  return new Promise((resolve, reject) => {
    table_resolve = resolve
    eTable = third_table.render({
      elem,
      id: name,
      height: elem_p.height(),
      done(res, pageNumber, rowCount) {
        tableLoaded(res,pageNumber, rowCount)
      },
      cols,
      data: JSON.parse(JSON.stringify(data)),
      page: false,
      limit,
      skin
    })
  }).finally(loaded)
}
export function tableLoaded(res, pageNumber, rowCount) {
  let rData = res.data, count = rData.length, start = rowCount - count
  getElem()
  return Promise.all(rData.map((trData,i)  => {
    return renderTr(start + i, trData)
  })).then(() => {
    table_resolve && table_resolve()
  })
}
export function renderTr(i, data) {
  let tr = getTrElem(i)
  third_form.render('', tr)
  third_form.val(tr, data)
  return Promise.all([renderDate(tr, i), renderCombogrids(tr, i), renderSelects(i, select_key, tr)])
}
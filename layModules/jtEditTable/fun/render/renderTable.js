import { cols, data, eTable, elem, elem_p, limit, name, select_key, skin, table_resolve, third_table, tr_key } from "../../var/index"
import { tableLoaded } from "../initReload/tableLoaded"
import { getElem, getTrElem } from "../other/getElem"
import { setColVal } from "../val/valCol"
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
  })).finally(() => {
    console.log(eTable)
    table_resolve && table_resolve()
  })
}
export function renderTr(i, data) {
  let tr = getTrElem(i)
  return Promise.all(tr_key.map(key => setColVal(i, key, tr, data))).then(() => {
    return Promise.all([renderDates(tr, i), renderCombogrids(tr, i), renderSelects(i, select_key, tr)])
  })
}
import { data, def_data_tr, eTable, primaryCol } from "../../var/index";
// eslint-disable-next-line no-unused-vars
import { table_resolve } from "../../var/index";
import { endRender, startRender } from "../other/changeIsInit";
import { rowDel } from "./delRow";

export function judgeAdd(addData) {
  let arr 
  if (primaryCol) {
    addData = addData.filter((it = {}) => it[primaryCol])
    let i = 0
    arr = data.map((it, j) => {
      if (!it[primaryCol]) {
        return rowDel(i)
      } else {
        i++
      }
    })
  }
  return Promise.all(arr).then(() => {
    return rowAdd(addData.length ? addData : [{}])
  })
}
export function rowAdd(addData) {
  addData = addData.map(it => Object.assign({}, def_data_tr, it))
  startRender('rowAdd')
  return new Promise((resolve, reject) => {
    table_resolve = resolve
    eTable.addRow(addData)
  }).finally(() => endRender('rowAdd'))
}
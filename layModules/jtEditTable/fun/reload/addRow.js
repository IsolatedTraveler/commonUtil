import { data, def_data_tr, eTable, primaryCol, table_promise } from "../../var/index";
import { setPromise } from "../other/setPromise";
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
  setPromise('rowAdd')
  addData = addData.map(it => Object.assign({}, def_data_tr, it))
  eTable.addRow(addData)
  return table_promise
}
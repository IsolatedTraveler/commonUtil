/* eslint-disable no-unused-vars */
import { data, def_data_tr, eTable, forbidAdd, primaryCol, table_resolve } from "../../var/index"
import { fixedPosition } from "../other/fixedPosition"
import { closeZzc, openZzc } from "../other/zzc"
import { rowUpdate } from "../val/rowUpdate"
import { rowDel } from "./delRow"

export function addRow(cdata) {
  openZzc()
  if (!Array.isArray(cdata)) {
    cdata = [cdata]
  }
  return dealAddRow(cdata).then(() => {
    let i = 0, len = data.length - 1
    return Promise.all(data.map((it, j) => {
      if (!it[primaryCol] && len !== j) {
        return rowDel(i)
      } else {
        i++
      }
    }).filter(it => it))
  }).then(() => {
    fixedPosition(data.length - 1)
    closeZzc()
  })
}
function dealAddRow(cdata) {
  if (forbidAdd) {
    return rowAdd(cdata)
  } else {
    cdata = cdata.filter(it => it[primaryCol])
    cdata.push({})
    rowUpdate(cdata.shift(), data.length - 1).then(() => rowAdd(cdata))
  }
}
function rowAdd(cdata) {
  openZzc()
  cdata = cdata.map(it => Object.assign({}, def_data_tr, it))
  return new Promise((resolve, reject) => {
    table_resolve = resolve
    eTable.addRow(cdata)
  })
}
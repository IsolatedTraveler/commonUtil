/* eslint-disable no-unused-vars */
import { data, def_data_tr, eTable, forbidAdd, primaryCol, table_resolve } from "../../var/index";
import { fixedPosition } from "../other/fixedPosition";
import { endRender, startRender } from "../render/render";
import { rowUpdate } from "../val/rowUpdate";

export function updateRow(d, i) {
  return rowUpdate(d, i).then(res => {
    if (!forbidAdd && i == (data.length - 1)) {
      return rowAdd({}).then(res => {
        return fixedPosition(i)
      })
    }
  })
}
export function dealAddRow(cdata) {
  if (forbidAdd) {
    return rowAdd(cdata)
  } else {
    cdata = cdata.filter(it => it[primaryCol])
    cdata.push({})
    return rowUpdate(cdata.shift(), data.length - 1).then(() => rowAdd(cdata))
  }
}
export function rowAdd(cdata) {
 startRender()
  cdata = cdata.map(it => Object.assign({}, def_data_tr, it))
  return new Promise((resolve, reject) => {
    table_resolve = resolve
    eTable.addRow(cdata)
  }).finally(endRender)
}
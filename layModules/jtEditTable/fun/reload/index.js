/* eslint-disable no-unused-vars */
import { data, done, eTable, forbidAdd, primaryCol, table_resolve } from "../../var/index";
import { fixedPosition } from "../other/fixedPosition";
import { openZzc } from "../other/zzc";
import { addRow } from "../prop/addRow";

export function reload(cdata) {
  openZzc()
  return new Promise((resolve, reject) => {
    data = []
    table_resolve = resolve
    eTable.reload({data: forbidAdd ? []: [{}]})
  }).then(() => {
    return addRow(cdata)
  }).then(() => {
    return fixedPosition(data.length - 1)
  }).then(() => {
    done && done()
  })
}
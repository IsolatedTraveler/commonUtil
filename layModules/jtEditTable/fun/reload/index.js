import { data, done, eTable, forbidAdd } from "../../var/index";
// eslint-disable-next-line no-unused-vars
import { table_resolve } from "../../var/index";
import { tableLoaded } from "../initReload/tableLoaded";
import { fixedPosition } from "../other/fixedPosition";
import { openZzc } from "../other/zzc";
import { addRow } from "../prop/addRow";

export function reload(cdata) {
  openZzc('reload')
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
    tableLoaded()
  })
}
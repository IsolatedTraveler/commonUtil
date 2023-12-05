import { data, done, eTable, forbidAdd, table_promise } from "../../var/index";
import { tableLoaded } from "../initReload/tableLoaded";
import { fixedPosition } from "../other/fixedPosition";
import { setPromise } from "../other/setPromise";
import { addRow } from "../prop/addRow";

export function reload(cdata) {
  setPromise('reload').then(() => {
    return addRow(cdata)
  }).then(() => {
    return fixedPosition(data.length - 1)
  }).then(() => {
    done && done()
    tableLoaded()
  })
  data = []
  eTable.reload({ data: forbidAdd ? [] : [{}] })
  return table_promise
}
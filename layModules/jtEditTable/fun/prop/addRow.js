import { data, forbidAdd, primaryCol } from "../../var/index"
import { fixedPosition } from "../other/fixedPosition"
import { closeZzc, openZzc } from "../other/zzc"
import { judgeAdd, rowAdd } from "../reload/addRow"

export function addRow(cdata) {
  openZzc('addRow')
  if (!Array.isArray(cdata)) {
    cdata = [cdata]
  }
  return judgeAdd(cdata).then(() => {
    if (!forbidAdd && data[data.length - 1][primaryCol]) {
      return rowAdd([{}])
    }
  }).finally(() => {
    fixedPosition(data.length - 1)
    closeZzc('addRow')
  })
}
import { data } from "../../var/index"
import { fixedPosition } from "../other/fixedPosition"
import { closeZzc, openZzc } from "../other/zzc"
import { judgeAdd } from "../reload/addRow"

export function addRow(cdata) {
  openZzc('addRow')
  if (!Array.isArray(cdata)) {
    cdata = [cdata]
  }
  return judgeAdd(cdata).finally(() => {
    fixedPosition(data.length - 1)
    closeZzc('addRow')
  })
}
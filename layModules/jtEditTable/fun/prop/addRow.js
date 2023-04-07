import { data, primaryCol } from "../../var/index"
import { fixedPosition } from "../other/fixedPosition"
import { closeZzc, openZzc } from "../other/zzc"
import { rowDel } from "./delRow"
import { dealAddRow } from "./updateRow"

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
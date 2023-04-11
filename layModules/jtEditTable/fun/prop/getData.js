import { data, editCheckData, primaryCol } from "../../var/index";
import { error } from "../other/error";
import { trDataV } from "../val/trDataV";

export function getData(judge) {
  let d = data.map(it => {
    delete it.LAY_TABLE_INDEX
    return it
  })
  if (!judge && primaryCol) {
    let len = d.length
    for (let i = 0; i < len; i++) {
      let it = trDataV(i)
      if (it[primaryCol] && editCheckData) {
        let res = editCheckData(it, i, d)
        if (res) {
          return error(res, i)
        }
      }
    }
    return d.filter(it => it[primaryCol])
  }
  return d
}
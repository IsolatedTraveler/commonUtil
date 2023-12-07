import { colSelectKey, rowKeys, rows, colSelectVal } from "../../var/global";

export function setCol(title = '') {
  if (!rowKeys[title]) {
    var id = 'c' + colSelectKey.length
    rowKeys[title] = true
    rows.push({ field: id, title, wdth: (title.length + 1) * 15 })
    colSelectVal[title] = id
    colSelectKey.push({ mc: title, id })
  }
}
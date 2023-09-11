import { rowKeys, rows } from "../../../var/global";

export function setCol(field = '') {
  rowKeys[field] = true
  rows.push({ field, title: field, wdth: (field.length + 1) * 15 })
}
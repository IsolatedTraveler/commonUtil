// eslint-disable-next-line no-unused-vars
import { cols, rowKeys, rows } from "../../var";
export function reload() {
  rowKeys = {}
  rows = []
  cols[0] = rows
}
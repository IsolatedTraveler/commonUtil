// eslint-disable-next-line no-unused-vars
import { cols, fbData, rowKeys, rows, zbData } from "../../var/index";
export function reload() {
  rowKeys = {}
  rows = []
  cols[0] = rows
  zbData = []
  fbData = []
}
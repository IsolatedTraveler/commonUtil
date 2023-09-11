// eslint-disable-next-line no-unused-vars
import { fbData, rowKeys, zbData } from "../../../var";
import { cols, rows } from "../../var";
export function reload() {
  rowKeys = {}
  rows = []
  cols[0] = rows
  zbData = []
  fbData = []
}
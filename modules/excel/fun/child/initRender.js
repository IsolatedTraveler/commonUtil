import { cols, rowKeys, rows } from "../../var";
import { getInputFile } from "./child/index";

export function initRender() {
  rowKeys = {}
  rows = []
  cols[0] = rows
  getInputFile()
}
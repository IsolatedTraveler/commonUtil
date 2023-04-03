import { name, third_table } from "../../var/index";
import { editRow, rowEvent } from "./rowEvent";

export function initEvent() {
  let filter = `row(${name})`
  third_table.on(filter, rowEvent)
  third_table.on(filter, editRow)
}
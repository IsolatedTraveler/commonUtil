import { elem_f, elem_p, enterAdd, name, third_table, zb_filter } from "../../var/index";
import { colKeyup, editCol, lastRowColKeyup } from "./colEvent";
import { editRow, rowEvent } from "./rowEvent";
import { zbFormEvent } from "./zbFormEvent";
export function initEvent() {
  let filter = `row(${name})`
  third_table.on(filter, rowEvent)
  third_table.on(filter, editRow)
  elem_p.on('change', '[name]:not([laydate])', editCol)
  elem_p.on('keyup', commonUtil.kbjbg, colKeyup)
  if (enterAdd) {
    elem_p.on('keyup', '>.layui-table-view>.layui-table-box>.layui-table-body>table>tbody>tr:last', lastRowColKeyup)
  }
  if (elem_f && elem_f[0]) {
    elem_f.on('change', zb_filter, zbFormEvent)
  }
}
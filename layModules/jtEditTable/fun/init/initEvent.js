import { elem_f, elem_p, enterAdd, name, third_table, zb_filter } from "../../var/index";
import { colKeyup, eventEditCol, evnetKeyupLastRow } from "../event/eventCol";
import { eventEditRow, eventClickRow } from "../event/eventRow";
import { eventEidtInputCol } from "../event/eventInputCol";
export function initEvent() {
  third_table.on(`row(${name})`, eventClickRow)
  third_table.on(`edit(${name})`, eventEditRow)
  elem_p.on('change', '[name]:not([laydate])', eventEditCol)
  elem_p.on('keyup', commonUtil.kbjbg, colKeyup)
  if (enterAdd) {
    elem_p.on('keyup', '>.layui-table-view>.layui-table-box>.layui-table-body>table>tbody>tr:last', evnetKeyupLastRow)
  }
  if (elem_f && elem_f[0]) {
    elem_f.on('change', zb_filter, eventEidtInputCol)
  }
}
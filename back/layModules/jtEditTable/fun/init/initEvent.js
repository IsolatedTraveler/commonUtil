import { elem_f, elem_p, enterAdd, name, third_table, zb_change_cols, zb_filter } from "../../var/index";
import { colKeyup, eventEditColTd, eventEditInputCol } from "../event/eventCol";
import { eventClickRow, evnetKeyupLastRow } from "../event/eventRow";
import { eventZbEditInputCol } from "../event/eventZb";
export function initEvent() {
  third_table.on(`row(${name})`, eventClickRow)
  third_table.on(`edit(${name})`, eventEditColTd)
  elem_p.on('change', '[name]:not([laydate])', eventEditInputCol)
  elem_p.on('keyup', commonUtil.kbjbg, colKeyup)
  if (enterAdd) {
    elem_p.on('keyup', '>.layui-table-view>.layui-table-box>.layui-table-body>table>tbody>tr:last', evnetKeyupLastRow)
  }
  if (elem_f && elem_f[0] && zb_change_cols) {
    elem_f.on('change', zb_filter, eventZbEditInputCol)
  }
}
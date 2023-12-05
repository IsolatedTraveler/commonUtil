import { elem_p, isInit, rowCheck, rowClick, selected_tr, skinSelected, skin_selected } from "../../var/index";
import { getInputElems } from "../other/getElem";
import { getRowData } from "../prop/getRowData";
import { judgeAdd } from "../reload/addRow";
export function eventClickRow(res) {
  if (isInit) {
    let i = selected_tr ? selected_tr.index : 0
    elem_p.find(skinSelected).removeClass(skin_selected)
    res.tr.addClass(skin_selected)
    selected_tr = res
    if (i !== res.index && rowCheck) {
      getRowData().then(rowCheck)
    }
    if (rowClick) {
      getRowData().then(rowClick)
    }
  }
}
export function evnetKeyupLastRow(e) {
  if (isInit && e.keyCode === 13) {
    let tr = $(e.target).parents('tr'), lastElem = getInputElems(tr).last()[0]
    if (e.target == lastElem || e.target.parentElement == lastElem) {
      judgeAdd([{}])
    }
  }
}
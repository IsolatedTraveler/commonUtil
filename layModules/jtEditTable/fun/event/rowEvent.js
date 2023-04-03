import { elem_p, rowCheck, rowClick, selected_tr, skinSelected, skin_selected } from "../../var/index";
import { getRowData } from "../other/getRowData";

export function rowEvent(res) {
  let i = selected_tr ? selected_tr.index : 0
  elem_p.find(skinSelected).removeClass(skin_selected)
  res.tr.addClass(skin_selected)
  selected_tr = res
  if (rowClick) {
    rowClick(getRowData())
  }
  if (i !== res.index && rowCheck) {
    rowCheck(getRowData())
  }
}
export function editRow(res) {

}
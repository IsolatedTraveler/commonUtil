import { data, elem_p, isInit, rowCheck, rowClick, selected_tr, skinSelected, skin_selected } from "../../var/index";
import { getRowData } from "../prop/getRowData";

export function rowEvent(res) {
  if (isInit) {
    let i = selected_tr ? selected_tr.index : 0
    elem_p.find(skinSelected).removeClass(skin_selected)
    res.tr.addClass(skin_selected)
    selected_tr = res
    if (rowClick) {
      getRowData().then(rowClick)
    }
    if (i !== res.index && rowCheck) {
      getRowData().then(rowCheck)
    }
  }
}
export function editRow(res) {
  if (isInit) {
    let key = res.field, i = res.tr.attr('data-index'), v = res.value
    data[i][key] = v
  }
}
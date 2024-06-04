import { alertMsg } from "../../../../g-lobal"
import { ComboBoxConfig } from "../../type"
import { initializeComboboxBase } from "../fun"

export function getCommonCombobox(param: ComboBoxConfig) {
  try {
    param.valueField = param.valuefield || 'code'
    param.textField = param.textfield || 'name'
    param.editable = param.editable === undefined || param.editable === null || !!param.editable
    param.selectOnNavigation = false
    initializeComboboxBase(param)
  } catch (e) {
    alertMsg(e)
  }
}

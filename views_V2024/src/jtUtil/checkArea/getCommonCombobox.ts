import { ComboBoxConfig, initializeComboboxBase } from "../fun";

export function getCommonCombobox(param: ComboBoxConfig) {
  try {
    param.valueField = param.valuefield || 'code'
    param.textField = param.textfield || 'name'
    param.editable = param.editable === undefined || param.editable === null || !!param.editable
    param.selectOnNavigation = false
    initializeComboboxBase(param)
  } catch (e) {
    GLOBAL$COMMON$V2024$.alertMsg(e)
  }
}

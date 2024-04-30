export interface ComboBoxConfig {
  domid: string
  domId: string
  data: any[]
  valueField: string
  valuefield: string
  textField: string
  textfield: string
  required: boolean
  multiple: boolean
  selectOnNavigation: boolean
  editable: boolean
  readonly: boolean
  panelHeight?: number
  emptofirst?: boolean
  mrz?: string | number | string[] | number[]
  mrz_index?: boolean
  nextid?: string
  method?: Function
  changemethod?: Function
  flag?: boolean | string
  filter_arr?: string[]
  dicKey?: string
  addnull?: string | number
}
export function getPanelIsClose(domElem: any) {
  const panel = domElem.combobox('panel'), panelOptions = panel.panel('options')
  return panelOptions.closed
}
export function getPanelIsClose(domElem: any) {
  const panel = domElem.combobox('panel'), panelOptions = panel.panel('options')
  return panelOptions.closed
}
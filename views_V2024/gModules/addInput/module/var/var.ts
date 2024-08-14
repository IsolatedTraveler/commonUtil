import { AddInputConfig, TableColSelect, TableColSet } from "GMAddInput"
import { FIXED, setPopSelectElem, STYLE } from "../../../../g-lobal/dom/var"

export let valInput: JQuery<HTMLInputElement>, boxInput: JQuery<HTMLDivElement>, selectElemConfig: TableColSelect, selectPopElem: JQuery<HTMLDivElement>, valArr: string[][] = []
  , popElem: JQuery<HTMLDivElement>, popContentElem: JQuery<HTMLDivElement>, cols: TableColSet[]
export function initAdInput(config: AddInputConfig) {
  valInput = $(config.elem)
  boxInput = valInput.parent()
  cols = config.cols
  if (config.selectIndex || config.selectIndex === 0) {
    selectElemConfig = config.cols[config.selectIndex] as TableColSelect
    setPopSelectElem(selectElemConfig.data, selectElemConfig.id || 'id', selectElemConfig.mc || 'mc', true)
  }
  const fixedStyle = $('style[name="fixed"]')
  if (!fixedStyle[0]) {
    $('head').append($('<style name="fixed">' + STYLE + '</style>'))
  }
  popElem = $(`<div class="${FIXED}">`)
  popContentElem = $('<div style="width:75%;">')
  popElem.hide()
  popElem.append(popContentElem)
  boxInput.append(popElem)
}
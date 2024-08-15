import { AddInputConfig, FIXED, STYLE, TableColSet } from "GMAddInput"
import { setPopSelectElem } from "../../../../g-lobal/dom/var"

export let valInput: JQuery<HTMLInputElement>, boxInput: JQuery<HTMLDivElement>, selectElemConfig: TableColSet, selectPopElem: JQuery<HTMLDivElement>, valArr: string[][] = []
  , popElem: JQuery<HTMLDivElement>, popContentElem: JQuery<HTMLDivElement>, cols: TableColSet[], trData: any
  , split: string[] = ['|', ''], index: number = 0
export function initAdInput(config: AddInputConfig) {
  valInput = $(config.elem)
  boxInput = valInput.parent()
  cols = config.cols
  index = config.index || 0
  selectElemConfig = config.cols[index]
  if (selectElemConfig.type === 'select') {
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
export function setTrData(v: any) {
  trData = v
}
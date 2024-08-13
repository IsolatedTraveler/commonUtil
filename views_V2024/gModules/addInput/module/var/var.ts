import { AddInputConfig, TableColSelect, TableColSet } from "GMAddInput"
import { setPopSelectElem } from "../../../../g-lobal/dom/var"

export let valInput: JQuery<HTMLInputElement>, boxInput: JQuery<HTMLDivElement>, selectElemConfig: TableColSelect, selectPopElem: JQuery<HTMLDivElement>, valArr: string[][] = []
  , popElem: JQuery<HTMLDivElement>, cols: TableColSet[]
export function initAdInput(config: AddInputConfig) {
  valInput = $(config.elem)
  boxInput = valInput.parent()
  cols = config.cols
  if (config.selectIndex || config.selectIndex === 0) {
    selectElemConfig = config.cols[config.selectIndex] as TableColSelect
    setPopSelectElem(selectElemConfig.data, selectElemConfig.id || 'id', selectElemConfig.mc || 'mc', true)
  }
  popElem = $('<div>')
  popElem.hide()
  boxInput.append(popElem)
}
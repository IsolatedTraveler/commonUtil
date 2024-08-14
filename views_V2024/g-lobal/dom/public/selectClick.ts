import { isPop, popSelectElem, setIsPop } from "../var";

export function selectClick(event: JQuery.ClickEvent) {
  setIsPop(!isPop)
  isPop ? popSelectElem.show() : popSelectElem.hide()
  event.stopPropagation()
}
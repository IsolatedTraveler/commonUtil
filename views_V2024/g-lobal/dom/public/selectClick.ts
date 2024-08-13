import { isPop, popSelectElem, setIsPop } from "../var";

export function selectClick() {
  setIsPop(!isPop)
  isPop ? popSelectElem.show() : popSelectElem.hide()
}
import { isPop, setIsPop } from "../../../../g-lobal/dom/var";
import { popElem } from "../var";

export function boxClick() {
  setIsPop(!isPop)
  isPop ? popElem.show() : popElem.hide()
}
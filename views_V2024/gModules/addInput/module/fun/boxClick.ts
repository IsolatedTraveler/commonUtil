import { isPop, isRenderPop, setIsPop } from "../../../../g-lobal/dom/var";
import { popElem } from "../var";
import { renderPop } from "./renderPop";

export function boxClick(event: JQuery.ClickEvent) {
  if (isRenderPop) {
    setTimeout(() => {
      renderPop()
    }, 100);
  }
  setIsPop(!isPop)
  isPop ? popElem.show() : popElem.hide()
  event.stopPropagation()
}
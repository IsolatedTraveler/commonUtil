import { isPop, isRenderPop, setIsPop } from "../../../../g-lobal/dom/var";
import { popElem } from "../var";
import { hide } from "./hide";
import { renderPop } from "./renderPop";
import { show } from "./show";

export function boxClick(event: JQuery.ClickEvent) {
  if (isRenderPop) {
    setTimeout(() => {
      renderPop()
    }, 100);
  }
  setIsPop(!isPop)
  isPop ? show() : hide()
  event.stopPropagation()
}
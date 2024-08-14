import { bindSelectClick } from "../../../../g-lobal/dom/public";
import { setIsPop } from "../../../../g-lobal/dom/var";
import { boxInput, popContentElem, popElem, selectElemConfig, valInput } from "../var";
import { boxClick } from "./boxClick";
import { jtAddInput } from "./jtAddInput";

export function bindEvent() {
  (valInput[0] as any).jtAddInput = jtAddInput;
  selectElemConfig ? bindSelectClick(boxInput) : boxInput.on('click', boxClick)
  popElem.on('click', (event: JQuery.ClickEvent) => {
    setIsPop(false)
    popElem.hide()
    event.stopPropagation()
  })
  popContentElem.on('click', (event: JQuery.ClickEvent) => { event.stopPropagation() })
}
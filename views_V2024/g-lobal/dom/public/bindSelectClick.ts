import { popSelectElem, setIsPop } from "../var";
import { selectClick } from "./selectClick";

export function bindSelectClick(elem: JQuery<HTMLElement>) {
  elem.on('click', selectClick)
  $(document).on('click', function (event: JQuery.ClickEvent) {
    if (!elem.is(event.target) && elem.has(event.target).length === 0) {
      popSelectElem.hide()
      setIsPop(false)
    }
  });
}
import { selectClick } from "./selectClick";

export function bindSelectClick(elem: JQuery<HTMLElement>) {
  elem.on('click', selectClick)
}
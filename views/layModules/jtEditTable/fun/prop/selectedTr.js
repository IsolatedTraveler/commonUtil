import { getTrElem } from "../other/getElem";

export function selectedTr(i = 0) {
  getTrElem(i).trigger('click')
}
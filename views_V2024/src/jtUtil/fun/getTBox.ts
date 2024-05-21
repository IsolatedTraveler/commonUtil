import { T_BOX } from "../var";

export function getTBox(elem: JQuery): JQuery {
  return elem.find(T_BOX)
}
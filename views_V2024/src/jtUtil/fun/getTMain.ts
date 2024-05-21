import { T_MAIN } from "../var";
import { getTBox } from "./getTBox";

export function getTMain(elem: JQuery, box: JQuery = getTBox(elem)): JQuery {
  return box.find(T_MAIN)
}
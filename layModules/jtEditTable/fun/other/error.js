import { elem_p, errorTimeOut, skinError, skin_error, third_layer } from "../../var/index";
import { fixedPosition } from "./fixedPosition";
import { getTrElem } from "./getElem";

export function error(res, i) {
  let tr = getTrElem(i)
  tr.addClass(skin_error)
  third_layer.msg(res)
  setTimeout(() => {
    elem_p.find(skinError).removeClass(skin_error)
  }, errorTimeOut);
  fixedPosition(i)
}
import { elem_t_s } from "../../var"
import { getTrElemLast } from "./getElem"

export function scroll(i) {
  if (!(i > 0)) {
    i = 0
  }
  let tr = getTrElemLast(i), top = tr.position().top - elem_t_s.heigth() + 72
  elem_t_s.scrollTop(top)
}
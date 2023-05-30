import { kbcs } from "../../var/kbcs"

export function val(key, v) {
  if (v === undefined || v === null) {
    return kbcs[key]
  } else {
    kbcs[key] = v || 0
  }
}
export default {
  val
}
import { primaryCol } from "../../var/index"

export function initWatch(d) {
  if (d) {
    d = d.filter(it => it)
    if (!d[0]) {
      d = null
    } else if (!primaryCol) {
      primaryCol = d[0]
    }
  }
  return d
}
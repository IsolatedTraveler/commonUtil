import { calcDbxx } from "../fun/calcJf"
import { getZf } from "../fun/dealJf"
import { kbcs } from "../var/kbcs"

export function getDbxx() {
  var bxzf = getZf().zf, zf = bxzf + kbcs.dqdbf
  return calcDbxx(zf, bxzf)
}

import { kbcs } from "../../var/kbcs"
import { calcDbxx } from "../1/calcJf"
import { getZf } from "../1/dealJf"

export function getDbxx() {
  var bxzf = getZf().zf, zf = bxzf + kbcs.dqdbf
  return calcDbxx(zf, bxzf)
}
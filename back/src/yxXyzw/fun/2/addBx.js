import { kbcs } from "../../var/kbcs"
import { setBjbx, setHjbx, setQtbx } from "../1/setCs"

export function addBx(val) {
  if (val == 10) {
    setQtbx(kbcs.qtbx + 1)
  } else if (val == 20) {
    setHjbx(kbcs.hjbx + 1)
  } else if (val == 50) {
    setBjbx(kbcs.bjbx + 1)
  }
}
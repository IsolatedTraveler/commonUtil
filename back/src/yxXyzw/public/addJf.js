import { setDqdbf, setDqjf, setDqzf } from "../fun/1/setCs"
import { addBx } from "../fun/2/addBx"
import { keys, len, vals } from "../var/gdcs"
import { kbcs } from "../var/kbcs"

export function addDqjf(v) {
  var dqjf = kbcs.dqjf + v
  if (dqjf >= kbcs.dqzf) {
    dqjf = dqjf % kbcs.dqzf
    var index = keys.indexOf(kbcs.dqzf)
    var val = vals[index]
    addBx(val)
    index = (index + 1) % len
    setDqzf(keys[index])
  }
  setDqjf(dqjf)
  setDqdbf(kbcs.dqdbf + v)
}
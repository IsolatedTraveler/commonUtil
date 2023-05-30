import { keys, len, vals } from "../var/gdcs"
import { dcjfh, kbcs } from "../var/kbcs"

export function getZf() {
  var { mzbx, qtbx, hjbx, bjbx, dqjf, dqzf } = kbcs,
    zf = mzbx + qtbx * 10 + hjbx * 20 + bjbx * 50, i = 0,
    ljf = zf + dqjf, bxzf = zf
  if (dqzf > 0) {
    i = keys.indexOf(dqzf)
  }
  while (ljf > keys[i]) {
    for (; len > i && ljf > keys[i]; i++) {
      if (vals[i] > 0) {
        zf += vals[i]
      }
      ljf = ljf - keys[i] + vals[i]
    }
    if (len <= i) {
      i = 0
    }
  }
  return { zf, bxzf }
}

export function getDcjfh() {
  dcjfh = dcjfh || eval(keys.join('+')) - eval(vals.filter(it => it < 0).join('+'))
  return dcjfh
}
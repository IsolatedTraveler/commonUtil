import { setCs } from "../public/setCs"
import { kbcs } from "../var/kbcs"

export function setCsObj({ mzbx, qtbx, hjbx, bjbx, dqjf, dqzf, dqdbf } = {}) {
  setCs(mzbx, qtbx, hjbx, bjbx, dqjf, dqzf, dqdbf)
}
export function reSetCs(mzbx1, qtbx1, hjbx1, bjbx1, dqjf1, dqzf1, dqdbf1) {
  var old = { ...kbcs }
  return new Promise((resolve, reject) => {
    setCs(mzbx1, qtbx1, hjbx1, bjbx1, dqjf1, dqzf1, dqdbf1)
    resolve(old)
  })
}
export default {
  setCsObj
}
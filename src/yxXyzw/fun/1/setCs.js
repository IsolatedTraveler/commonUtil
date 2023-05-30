import { kbcs } from "../../var/kbcs"
import { val } from "./val"
export function setMzbx(v) {
  return val('mzbx', v)
}
export function setQtbx(v) {
  return val('qtbx', v)
}
export function setHjbx(v) {
  return val('hjbx', v)
}
export function setBjbx(v) {
  return val('bjbx', v)
}
export function setDqjf(v) {
  return val('dqjf', v)
}
export function setDqzf(v) {
  return val('dqzf', v)
}
export function setDqdbf(v) {
  return val('dqdbf', v)
}
export function setCs(mzbx, qtbx, hjbx, bjbx, dqjf, dqzf, dqdbf) {
  setMzbx(mzbx)
  setQtbx(qtbx)
  setHjbx(hjbx)
  setBjbx(bjbx)
  setDqjf(dqjf)
  setDqzf(dqzf)
  setDqdbf(dqdbf)
}
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
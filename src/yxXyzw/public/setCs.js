import { setMzbx, setQtbx, setHjbx, setBjbx } from "../fun/setBxxx"
export { setMzbx, setQtbx, setHjbx, setBjbx } from "../fun/setBxxx"
import {val} from "../fun/val"
export function setCs(mzbx, qtbx, hjbx, bjbx, dqjf, dqzf, dqdbf) {
  setMzbx(mzbx)
  setQtbx(qtbx)
  setHjbx(hjbx)
  setBjbx(bjbx)
  setDqjf(dqjf)
  setDqzf(dqzf)
  setDqdbf(dqdbf)
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
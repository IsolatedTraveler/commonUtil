/* eslint-disable no-unused-vars */
import { isInit, isInit_arr } from "../../var/index";
import { closeZzc, openZzc } from "./zzc";

export function startRender(name) {
  isInit_arr.pop()
  isInit = !!isInit_arr.length
  openZzc('start ' + name)
}
export function endRender(name) {
  isInit_arr.push(name)
  isInit = true
  closeZzc('end ' + name)
}
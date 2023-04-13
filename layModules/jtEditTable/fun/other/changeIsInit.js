/* eslint-disable no-unused-vars */
import { isInit, isInit_arr } from "../../var/index";
import { closeZzc, openZzc } from "./zzc";

export function startRender() {
  isInit_arr.pop()
  isInit = !!isInit_arr.length
  openZzc()
}
export function endRender() {
  isInit_arr.push(true)
  isInit = true
  closeZzc()
}
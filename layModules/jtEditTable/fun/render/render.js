/* eslint-disable no-unused-vars */
import { isInit } from "../../var/index";
import { closeZzc, openZzc } from "../other/zzc";

export function startRender() {
  openZzc()
  isInit = false
}
export function endRender() {
  isInit = true
  closeZzc()
}
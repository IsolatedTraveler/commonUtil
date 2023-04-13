/* eslint-disable no-unused-vars */
import { isInit } from "../../var/index";
import { closeZzc, openZzc } from "./zzc";

export function startRender() {
  openZzc()
  isInit = false
}
export function endRender() {
  isInit = true
  closeZzc()
}
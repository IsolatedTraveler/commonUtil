import { getConfig, getUser } from "../../../g-lobal"
import { getXhr } from "../../../main"
import { StartRule } from "../type"
import { dicUrl } from "./const"


export var organization: string, region: string, startRule: StartRule = {}
  , isInitJtSync: Promise<any>
export function initJtSync() {
  if (!isInitJtSync) {
    isInitJtSync = Promise.all([setStartRule(), getFbdq()])
  }
  return isInitJtSync
}
export function setStartRule() {
  return getXhr(dicUrl, {}, {}).then((e: any) => startRule = e)
}
export function getFbdq() {
  organization = getUser().jgid
  return getConfig('xtxx').then((res: any) => region = res.fbdq)
}
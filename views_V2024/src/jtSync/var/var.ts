import { getXhr, initLayui, getConfig, getUser } from "../../../g-lobal/main"
import { StartRule } from "../type"
import { dicUrl } from "./const"


export var organization: string, region: string, startRule: StartRule = {}
  , isInitJtSync: Promise<any>
export function initJtSync() {
  if (!isInitJtSync) {
    isInitJtSync = Promise.all([setStartRule(), getFbdq(), initLayui(['layer'])])
  }
  return isInitJtSync
}
export function setStartRule() {
  return getXhr(dicUrl, {}, {}).then((e: any) => startRule = e)
}
export function getFbdq() {
  setOrganization(getUser().jgid)
  return getConfig('xtxx').then((res: any) => setRegion(res.fbdq))
}
export function setOrganization(v: string) {
  organization = v
}
export function setRegion(v: string) {
  region = v
}
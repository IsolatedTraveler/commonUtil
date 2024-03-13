import { dicUrl } from "./const"

export interface StartRule {
  [key: string]: StartRule
}
export var organization: string, region: string, startRule: StartRule = {}
  , isInit: Promise<any>
export function init() {
  if (!isInit) {
    isInit = Promise.all([setStartRule(), getFbdq()])
  }
  return isInit
}
export function setStartRule() {
  return GLOBAL$AJAX$.getAjaxSync(dicUrl, {}, { urlType: 'origin' }).then(e => startRule = e)
}
export function getFbdq() {
  try {
    region = GLOBAL$AJAX$.getConfig('xtxx').fbdq
    organization = GLOBAL$USER$.getUser().jgid
  } catch (e) {

  }
}
import { dicUrl } from "./const"

interface JudgeLoad {
  [key: string]: Promise<any> | null
}
export interface StartRule {
  [key: string]: StartRule
}
export var organization: string, region: string, judgeLoad: JudgeLoad = {}, startRule: StartRule = {}
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
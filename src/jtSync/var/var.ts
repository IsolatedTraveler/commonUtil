import { dicUrl } from "./const"

interface JudgeLoad {
  [key: string]: Promise<any> | null
}
export interface StartRule {
  [key: string]: StartRule
}
export var organization: string, region: string, judgeLoad: JudgeLoad = {}, startRule: StartRule = {}
  , isInit: Promise<StartRule>
export function init(region1: string, organization1: string) {
  setIsInit(GLOBAL$AJAX$.getAjaxSync(dicUrl, {}).then(setStartRule))
  region = region1
  organization = organization1
  judgeLoad = {}
}
export function setStartRule(v: any) {
  return startRule = v
}
export function setIsInit(v: any) {
  isInit = v
}
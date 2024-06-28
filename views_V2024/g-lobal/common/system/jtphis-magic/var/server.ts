import { extractPrimaryUrl } from "../../../../url/fun/extractPrimaryUrl"
import { getAppBaseUrl } from "../../../../url/public/getAppBaseUrl"
import { hisConfig } from "./config"

export var serverUrl = ''
  , SYSTEM: any = getSystem()

export function setServerUrl(): string {
  return extractPrimaryUrl(hisConfig.magicServer || getAppBaseUrl())
}
export function getSystem() {
  try {
    return SYSTEM = window.jthisJsObject.jthis
  } catch (_err) {
    return
  }
}
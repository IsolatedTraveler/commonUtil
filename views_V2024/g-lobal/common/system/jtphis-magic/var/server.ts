import { extractPrimaryUrl } from "../../../../url/fun/extractPrimaryUrl"
import { getAppBaseUrl } from "../../../../url/public/getAppBaseUrl"
import { hisConfig } from "./config"

export var serverUrl = ''
  , SYSTEM: any = getSystem()

export function setServerUrl(): string {
  serverUrl = extractPrimaryUrl(hisConfig.magicServer || getAppBaseUrl())
  return serverUrl = serverUrl.endsWith('/') || /\.[^/]+$/.test(serverUrl) ? serverUrl : `${serverUrl}/`
}
export function getSystem() {
  try {
    return SYSTEM = window.jthisJsObject.jthis
  } catch (_err) {
    return
  }
}
import { extractPrimaryUrl } from "../../../../url/fun/extractPrimaryUrl"
import { getAppBaseUrl } from "../../../../url/public/getAppBaseUrl"
import { hisConfig } from "./config"

export var serverUrl = ''
  , SYSTEM: any = getSystem()

export function setServerUrl(): string {
  const url = new URL(extractPrimaryUrl(hisConfig.magicServer || getAppBaseUrl())), path = url.pathname
  return serverUrl = url.origin + (path.endsWith('/') || /\.[^/]+$/.test(path) ? path : `${path}/`)
}
export function getSystem() {
  try {
    return SYSTEM = window.jthisJsObject.jthis
  } catch (_err) {
    return
  }
}
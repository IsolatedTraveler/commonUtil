import { extractPrimaryUrl } from "../../../../url/fun/extractPrimaryUrl"
import { getAppBaseUrl } from "../../../../url/public/getAppBaseUrl"
import { hisConfig } from "./config"

export var serverUrl = ''

export function setServerUrl(): string {
  return extractPrimaryUrl(hisConfig.magicServer || getAppBaseUrl())
}
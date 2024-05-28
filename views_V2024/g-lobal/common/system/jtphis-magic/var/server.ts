import { extractPrimaryUrl } from "../../../../url/fun/extractPrimaryUrl"
import { getAppBaseUrl } from "../../../../url/public/getAppBaseUrl"
import { config } from "./config"

export var serverUrl = ''

export function setServerUrl(): string {
  return extractPrimaryUrl(config.magicServer || getAppBaseUrl())
}
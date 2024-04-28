import { getConfig } from "../../../../views/g-lobal"
import { extractPrimaryUrl } from "../fun"
import { urlPattern } from "./const"

export var appBaseUrl: string // 应用基础URL
  , serverUrl: string // 服务端URL
  , configData: string // 存储配置数据
// 设置应用的基础URL
export function setAppBaseUrl() {
  let url = window.location.href
  return appBaseUrl = (url.split(urlPattern)[0] + '/').replace(/\/+/g, '/')
}
export function setServerUrl() {
  return serverUrl = extractPrimaryUrl(getConfig().magicServer)
}
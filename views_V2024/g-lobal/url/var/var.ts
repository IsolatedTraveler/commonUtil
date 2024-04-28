import { getConfig } from "../../../../views/g-lobal"
import { extractPrimaryUrl } from "../fun"
import { urlPattern } from "./const"

export var appBaseUrl: string // 应用基础URL
  , serverUrl: string // 服务端URL
  , configData: string // 存储配置数据
/**
 *  @description 设置应用程序的基础URL。
 * 此函数从当前窗口的location.href中提取协议、域名和端口部分，
 * 然后确保URL以单个斜杠结尾。该URL用于作为应用内其他相对URL的基准。
 * @returns {string} 应用程序的基础URL。
 */
export function setAppBaseUrl(): string {
  let url = window.location.href
  return appBaseUrl = (url.split(urlPattern)[0] + '/').replace(/\/+/g, '/')
}
/**
 *  @description 设置服务端URL。此函数从应用程序配置中提取主要的服务端URL。
 * 首先通过`getConfig()`获取配置信息，然后从配置的`magicServer`属性中提取主要URL。
 * @returns {string} 设置后的服务端URL。
 */
export function setServerUrl(): string {
  return serverUrl = extractPrimaryUrl(getConfig().magicServer)
}
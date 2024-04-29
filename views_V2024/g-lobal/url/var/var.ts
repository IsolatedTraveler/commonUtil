import { urlPattern } from "./const"
import { GLOBAL$WIN$ } from '../../../../w/window'

export var appBaseUrl: string // 应用基础URL
  , serverUrl: string // 服务端URL
/**
 *  @description 设置应用程序的基础URL。
 * 此函数从当前窗口的location.href中提取协议、域名和端口部分，
 * 然后确保URL以单个斜杠结尾。该URL用于作为应用内其他相对URL的基准。
 * @returns {string} 应用程序的基础URL。
 */
export function setAppBaseUrl(): string {
  let url = GLOBAL$WIN$.location.href
  return appBaseUrl = (url.split(urlPattern)[0] + '/').replace(/\/+/g, '/')
}
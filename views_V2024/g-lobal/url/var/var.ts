import { URL_PATTERN } from "./const"

export var appBaseUrl: string // 应用基础URL
/**
 * @description 设置应用程序的基础URL。
 * @returns {string} 应用程序的基础URL。
 */
export function setAppBaseUrl(): string {
  try {
    let url = window.location.href.split(URL_PATTERN)[0]
    return appBaseUrl = (url.endsWith('/') || /\.[^/]+$/.test(url)) && url !== window.location.origin ? url : `${url}/`
  } catch {
    return ''
  }
}
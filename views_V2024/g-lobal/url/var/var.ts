import { URL_PATTERN } from "./const"

export var appBaseUrl: string // 应用基础URL
/**
 * @description 设置应用程序的基础URL。
 * @returns {string} 应用程序的基础URL。
 */
export function setAppBaseUrl(): string {
  try {
    const path = window.location.pathname.split(URL_PATTERN)[0]
    return appBaseUrl = window.location.origin + (path.endsWith('/') || /\.[^/]+$/.test(path) ? path : `${path}/`)
  } catch {
    return ''
  }
}
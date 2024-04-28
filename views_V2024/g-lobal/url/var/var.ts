import { urlPattern } from "./const"

export var appBaseUrl: string
export function setAppBaseUrl() {
  let url = window.location.href
  return appBaseUrl = (url.split(urlPattern)[0] + '/').replace(/\/+/g, '/')
}
import { UrlType } from "../type"
import { dealsUrl } from "./concat"
import { getBaseUrl } from "./jsUrl"

export function getAllUrl(url: string, lx: UrlType) {
  if (/^http/.test(url)) {
    return url
  } else if (lx === 'origin') {
    return dealsUrl(url, getBaseUrl())
  } else {
    return dealsUrl(url, getServiceUrl())
  }
}
export function getServiceUrl() {

}
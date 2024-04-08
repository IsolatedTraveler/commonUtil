import { getConfig } from "../../ajax/public/api"
import { setPageTemp } from "../../temp/tempData"
import { UrlType } from "../type"
import { urlUpload } from "../var"
import { setUrlUploadVal } from "../var/global"
import { dealsUrl } from "./concat"
import { getBaseUrl } from "./jsUrl"
import { getServiceUrl } from "./mainUrl"

export function getAllUrl(url: string, lx: UrlType) {
  if (/^http/.test(url)) {
    return url
  } else if (lx === 'origin') {
    return dealsUrl(url, getBaseUrl())
  } else {
    return dealsUrl(url, getServiceUrl())
  }
}
export function getUploadUrl() {
  return setPageTemp(urlUpload, setUploadUrl)
}
function setUploadUrl() {
  return setUrlUploadVal(getConfig('url_common_file'))
}
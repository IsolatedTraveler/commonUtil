import { urlRegV } from "../../../types/const"
import { urlBase } from "../var"
import { seturlBaseVal } from "../var/global"

export function getBaseUrl() {
  return GLOBAL$TEMP$.setPageTemp(urlBase, setBaseUrl)
}
function setBaseUrl() {
  let reg = new RegExp(urlRegV), url = window.location.href
  seturlBaseVal((url.split(reg)[0] + '/').replace(/\/+/g, '/'))
  return urlBase
}
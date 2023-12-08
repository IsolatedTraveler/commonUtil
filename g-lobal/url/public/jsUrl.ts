import { urlRegV } from "../../../types/const"
import { urlBase } from "../var"
import { seturlBaseVal } from "../var/global"

export function getBaseUrl() {
  return GLOBAL$TEMP$.setPageTemp(urlBase, setBaseUrl)
}
function setBaseUrl() {
  let url = window.location.href
  seturlBaseVal((url.split(urlRegV)[0] + '/').replace(/\/+/g, '/'))
  return urlBase
}
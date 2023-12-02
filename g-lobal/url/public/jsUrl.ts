import { urlRegV } from "../../../types/const"
import { setPageTemp } from "../../temp/tempData"
import { urlBase } from "../var"
import { seturlBaseVal } from "../var/global"

export function getBaseUrl() {
  return setPageTemp(urlBase, setBaseUrl)
}
function setBaseUrl() {
  let reg = new RegExp(urlRegV), url = window.location.href
  seturlBaseVal((url.split(reg)[0] + '/').replace(/\/+/g, '/'))
  return urlBase
}
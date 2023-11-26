import { setUrlBase, urlBase, urlRegV } from "../../../var";
import { setPageTemp } from "../../temp/tempData";

export function getBaseUrl() {
  return setPageTemp(urlBase, setBaseUrl)
}
function setBaseUrl() {
  let reg = new RegExp(urlRegV), url = window.location.href
  setUrlBase((url.split(reg)[0] + '/').replace(/\/+/g, '/'))
  return urlBase
}
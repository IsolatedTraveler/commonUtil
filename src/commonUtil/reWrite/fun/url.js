import { getMainUrl, urlServer } from "../../../../g-lobal"
import { setPageTemp } from "../../public/fun/deeps"
function setServiceUrl() {
  return urlServer = getMainUrl(that.getConfig().magicServer)
}
export function getServiceUrl() {
  return setPageTemp(urlServer, setServiceUrl)
}
export default {
  getServiceUrl
}
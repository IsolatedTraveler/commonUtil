import { getMainUrl } from "../../../../g-lobal/ajax/public/ajax"
import { urlServer } from "../../../../g-lobal/base/var/url"
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
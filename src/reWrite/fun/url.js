import { setPageTemp } from "../../public/fun/deeps"
import { that } from "../../var/init"
import { urlServer } from "../../var/url"
function getMainUrl(arr) {
  if (typeof arr === 'string') {
    arr = [arr]
  }
  let len = arr.length
  for (let i = 0; i < len; i++) {
    if (arr[i].indexOf(location.origin) > -1) {
      return arr[i]
    }
  }
}
function setServiceUrl() {
  var data = that.getConfig(), inurl = data.inURL, outurl = data.outURL
  return urlServer = getMainUrl(inurl) || getMainUrl(outurl) || data.defaulturl
}
export function getServiceUrl() {
  return setPageTemp(urlServer, setServiceUrl)
}
export default {
  getServiceUrl
}
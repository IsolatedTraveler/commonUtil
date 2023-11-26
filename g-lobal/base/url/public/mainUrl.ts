import { setUrlServerVal, system, urlServer } from "../../../var"
import { setPageTemp } from "../../temp"

export function getMainUrl(arr: string | Array<string>) {
  if (typeof arr === 'string') {
    return arr
  }
  let len = arr.length
  for (let i = 0; i < len; i++) {
    if (arr[i].indexOf(location.origin) > -1) {
      return arr[i]
    }
  }
  return arr[0]
}
function setServiceUrl() {
  let url
  if (system) {
    url = JSON.parse(system.getmainurl()).data
  } else {
    url = that.getConfig().magicServer
  }
  return setUrlServerVal(getMainUrl(url))
}
export function getServiceUrl() {
  return setPageTemp(urlServer, setServiceUrl)
}
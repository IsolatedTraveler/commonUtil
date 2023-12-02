import { getConfig } from "../../ajax/public/api"
import { setPageTemp } from "../../temp/tempData"
import { system } from "../../var"
import { urlServer } from "../var"
import { setUrlServerVal } from "../var/global"


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
    url = getConfig().magicServer
  }
  return setUrlServerVal(getMainUrl(url))
}
export function getServiceUrl() {
  return setPageTemp(urlServer, setServiceUrl)
}
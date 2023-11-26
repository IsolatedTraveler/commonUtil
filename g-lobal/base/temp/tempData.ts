import { webName } from "../../var"

export function tempData(name: string, val, obj: Storage = sessionStorage) {
  let name1: string = webName + name
  if (val === undefined) {
    var data: string = obj.getItem(name1) || obj.getItem(name) || 'null'
    return JSON.parse(data)
  } else if (val === null) {
    obj.removeItem(name1)
  } else {
    obj.setItem(name1, JSON.stringify(val))
  }
}
export function setPageTemp(val, callBack, param = undefined) {
  if (!val) {
    return callBack(param)
  }
  return val
}
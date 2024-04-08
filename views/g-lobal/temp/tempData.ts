import { webName } from "../commonUtil/var"
export function tempData(name: string, val: any, obj: Storage = sessionStorage) {
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
export function setPageTemp(val: any, callBack: Function, param: any = undefined) {
  if (!val) {
    return callBack(param)
  }
  return val
}
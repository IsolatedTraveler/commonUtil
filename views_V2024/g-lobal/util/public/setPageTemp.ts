export function setPageTemp(val: any, callBack: Function, param: any = undefined) {
  return val ? val : callBack(param)
}
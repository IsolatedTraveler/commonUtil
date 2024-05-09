import {
  divideString, calc, debounce1, errFormat, formatTreeData, extractIDInfo, idCard, uuid, preciseDecimal, prefix, resFormat, getAge
} from '../../g-lobal/util'
declare global {
  interface GLOBAL$UTIL$TYPE {
    divideString: typeof divideString
    calc: typeof calc
    debounce1: typeof debounce1
    errFormat: typeof errFormat
    formatTreeData: typeof formatTreeData
    extractIDInfo: typeof extractIDInfo
    idCard: typeof idCard
    uuid: typeof uuid
    preciseDecimal: typeof preciseDecimal
    prefix: typeof prefix
    resFormat: typeof resFormat
    getAge: typeof getAge
  }
  let GLOBAL$UTIL$: GLOBAL$UTIL$TYPE
}
export {

}
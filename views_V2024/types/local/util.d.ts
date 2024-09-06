import {
  arrToTree, debounce, divideString, errFormat, setPageTemp, throttle, toDecimalNumber, uuid
} from '../../g-lobal/util'
declare global {
  interface GLOBAL$UTIL$V2024$TYPE {
    arrToTree: typeof arrToTree
    debounce: typeof debounce
    divideString: typeof divideString
    errFormat: typeof errFormat
    setPageTemp: typeof setPageTemp
    throttle: typeof throttle
    toDecimalNumber: typeof toDecimalNumber
    uuid: typeof uuid
  }
  let GLOBAL$UTIL$V2024$: GLOBAL$UTIL$V2024$TYPE
}
export {

}
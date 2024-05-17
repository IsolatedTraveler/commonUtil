import {
  arrToTree, divideString, errFormat, session, setPageTemp, toDecimalNumber
} from '../../g-lobal/util'
declare global {
  interface GLOBAL$UTIL$V2024$TYPE {
    arrToTree: typeof arrToTree
    divideString: typeof divideString
    errFormat: typeof errFormat
    session: typeof session
    setPageTemp: typeof setPageTemp
    toDecimalNumber: typeof toDecimalNumber
  }
  let GLOBAL$UTIL$V2024$: GLOBAL$UTIL$V2024$TYPE
}
export {

}
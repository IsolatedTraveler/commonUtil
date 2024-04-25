import {
  calc, debounce1, formatTreeData, uuid, preciseDecimal, prefix, getAge
} from '../../views/g-lobal/util'
declare global {
  interface GLOBAL$UTIL$TYPE {
    calc: typeof calc
    debounce1: typeof debounce1
    formatTreeData: typeof formatTreeData
    uuid: typeof uuid
    preciseDecimal: typeof preciseDecimal
    prefix: typeof prefix
    getAge: typeof getAge
  }
  let GLOBAL$UTIL$: GLOBAL$UTIL$TYPE
}
export {

}
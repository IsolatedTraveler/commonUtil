import {
  debounce1, formatTreeData, uuid, prefix
} from '../../g-lobal/util'
declare global {
  interface GLOBAL$UTIL$TYPE {
    debounce1: typeof debounce1
    formatTreeData: typeof formatTreeData
    uuid: typeof uuid
    prefix: typeof prefix
  }
  let GLOBAL$UTIL$: GLOBAL$UTIL$TYPE
}
export {

}
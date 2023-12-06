import {
  debounce1, uuid, prefix
} from '../../g-lobal/util'
declare global {
  interface GLOBAL$UTIL$TYPE {
    debounce1: typeof debounce1
    uuid: typeof uuid
    prefix: typeof prefix
  }
  let GLOBAL$UTIL$: GLOBAL$UTIL$TYPE
}
export {

}
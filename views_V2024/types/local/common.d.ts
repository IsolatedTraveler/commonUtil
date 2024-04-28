import {
  contentType, setServerUrl
} from '../../views/g-lobal/common'
declare global {
  interface GLOBAL$COMMON$V2024$TYPE {
    contentType: typeof contentType
    setServerUrl: typeof setServerUrl
  }
  let GLOBAL$COMMON$V2024$: GLOBAL$COMMON$V2024$TYPE
}
export {

}
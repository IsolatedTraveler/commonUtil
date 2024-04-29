import {
  checkAuth, setServerUrl
} from '../../g-lobal/common'
declare global {
  interface GLOBAL$COMMON$V2024$TYPE {
    checkAuth: typeof checkAuth
    setServerUrl: typeof setServerUrl
  }
  let GLOBAL$COMMON$V2024$: GLOBAL$COMMON$V2024$TYPE
}
export {

}
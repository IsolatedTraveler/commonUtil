import {
  checkAuth, DEFAULT_AUTH_USER, XHR_JQ_CODE, XHR_JQ_URL, contentType, setServerUrl
} from '../../views/g-lobal/common'
declare global {
  interface GLOBAL$COMMON$V2024$TYPE {
    checkAuth: typeof checkAuth
    DEFAULT_AUTH_USER: typeof DEFAULT_AUTH_USER
    XHR_JQ_CODE: typeof XHR_JQ_CODE
    XHR_JQ_URL: typeof XHR_JQ_URL
    contentType: typeof contentType
    setServerUrl: typeof setServerUrl
  }
  let GLOBAL$COMMON$V2024$: GLOBAL$COMMON$V2024$TYPE
}
export {

}
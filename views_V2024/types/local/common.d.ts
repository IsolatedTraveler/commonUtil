import {
  alertMsg, confirmMsg, openDialog, dicget, getConfig, getUser, checkAuth, setServerUrl
} from '../../g-lobal/common'
declare global {
  interface GLOBAL$COMMON$V2024$TYPE {
    alertMsg: typeof alertMsg
    confirmMsg: typeof confirmMsg
    openDialog: typeof openDialog
    dicget: typeof dicget
    getConfig: typeof getConfig
    getUser: typeof getUser
    checkAuth: typeof checkAuth
    setServerUrl: typeof setServerUrl
  }
  let GLOBAL$COMMON$V2024$: GLOBAL$COMMON$V2024$TYPE
}
export {

}
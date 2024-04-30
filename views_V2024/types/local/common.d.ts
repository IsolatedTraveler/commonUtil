import {
  alertMsg, confirmMsg, openDialog, XZQHURL, dealRequestData, dicget, getConfig, getUser, getXzqh, getXzqhmc, possessMkqx, checkAuth, setServerUrl
} from '../../g-lobal/common'
declare global {
  interface GLOBAL$COMMON$V2024$TYPE {
    alertMsg: typeof alertMsg
    confirmMsg: typeof confirmMsg
    openDialog: typeof openDialog
    XZQHURL: typeof XZQHURL
    dealRequestData: typeof dealRequestData
    dicget: typeof dicget
    getConfig: typeof getConfig
    getUser: typeof getUser
    getXzqh: typeof getXzqh
    getXzqhmc: typeof getXzqhmc
    possessMkqx: typeof possessMkqx
    checkAuth: typeof checkAuth
    setServerUrl: typeof setServerUrl
  }
  let GLOBAL$COMMON$V2024$: GLOBAL$COMMON$V2024$TYPE
}
export {

}
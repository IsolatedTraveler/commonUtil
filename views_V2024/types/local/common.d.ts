import {
  alertMsg, confirmMsg, openDialog, dealRequestData, getConfig, getUser, CONFIG_URL, DICS, MKQX, MKQX_URL, SYSTEM, XZQH_URL, configData, setConfigData, setUser, user, checkAuth, setServerUrl
} from '../../g-lobal/common'
declare global {
  interface GLOBAL$COMMON$V2024$TYPE {
    alertMsg: typeof alertMsg
    confirmMsg: typeof confirmMsg
    openDialog: typeof openDialog
    dealRequestData: typeof dealRequestData
    getConfig: typeof getConfig
    getUser: typeof getUser
    CONFIG_URL: typeof CONFIG_URL
    DICS: typeof DICS
    MKQX: typeof MKQX
    MKQX_URL: typeof MKQX_URL
    SYSTEM: typeof SYSTEM
    XZQH_URL: typeof XZQH_URL
    configData: typeof configData
    setConfigData: typeof setConfigData
    setUser: typeof setUser
    user: typeof user
    checkAuth: typeof checkAuth
    setServerUrl: typeof setServerUrl
  }
  let GLOBAL$COMMON$V2024$: GLOBAL$COMMON$V2024$TYPE
}
export {

}
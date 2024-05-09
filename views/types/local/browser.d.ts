import {
  getJtPhisSystem, getSystemVal, bbPrint, getBrowserParam, setBrowserParam, errorTrace, openDialog, openMsgBox, skip
} from '../../g-lobal/browser'
declare global {
  interface GLOBAL$BROWSER$TYPE {
    getJtPhisSystem: typeof getJtPhisSystem
    getSystemVal: typeof getSystemVal
    bbPrint: typeof bbPrint
    getBrowserParam: typeof getBrowserParam
    setBrowserParam: typeof setBrowserParam
    errorTrace: typeof errorTrace
    openDialog: typeof openDialog
    openMsgBox: typeof openMsgBox
    skip: typeof skip
  }
  let GLOBAL$BROWSER$: GLOBAL$BROWSER$TYPE
}
export {

}
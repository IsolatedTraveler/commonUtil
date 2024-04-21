import {
  getJtPhisSystem, getSystemVal, bbPrint, getBrowserParam, setBrowserParam, errorTrace, openMsgBox, skip
} from '../../views/g-lobal/browser'
declare global {
  interface GLOBAL$BROWSER$TYPE {
    getJtPhisSystem: typeof getJtPhisSystem
    getSystemVal: typeof getSystemVal
    bbPrint: typeof bbPrint
    getBrowserParam: typeof getBrowserParam
    setBrowserParam: typeof setBrowserParam
    errorTrace: typeof errorTrace
    openMsgBox: typeof openMsgBox
    skip: typeof skip
  }
  let GLOBAL$BROWSER$: GLOBAL$BROWSER$TYPE
}
export {

}
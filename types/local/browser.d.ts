import {
  getJtPhisSystem, getSystemVal, bbPrint, getBrowserParam, setBrowserParam
} from '../../g-lobal/browser'
declare global {
  interface GLOBAL$BROWSER$TYPE {
    getJtPhisSystem: typeof getJtPhisSystem
    getSystemVal: typeof getSystemVal
    bbPrint: typeof bbPrint
    getBrowserParam: typeof getBrowserParam
    setBrowserParam: typeof setBrowserParam
  }
  let GLOBAL$BROWSER$: GLOBAL$BROWSER$TYPE
}
export {

}
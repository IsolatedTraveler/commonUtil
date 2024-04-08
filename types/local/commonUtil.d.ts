import {
  dealLogin, paramget, setWebName
} from '../../views/g-lobal/commonUtil'
declare global {
  interface GLOBAL$COMMONUTIL$TYPE {
    dealLogin: typeof dealLogin
    paramget: typeof paramget
    setWebName: typeof setWebName
  }
  let GLOBAL$COMMONUTIL$: GLOBAL$COMMONUTIL$TYPE
}
export {

}
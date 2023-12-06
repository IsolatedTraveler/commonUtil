import {
  getUser, exit, logOut, paramget, setWebName
} from '../../g-lobal/commonUtil'
declare global {
  interface GLOBAL$COMMONUTIL$TYPE {
    getUser: typeof getUser
    exit: typeof exit
    logOut: typeof logOut
    paramget: typeof paramget
    setWebName: typeof setWebName
  }
  let GLOBAL$COMMONUTIL$: GLOBAL$COMMONUTIL$TYPE
}
export {

}
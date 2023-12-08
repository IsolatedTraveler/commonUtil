import {
  exited, getUser, login, exit, logOut
} from '../../g-lobal/user'
declare global {
  interface GLOBAL$USER$TYPE {
    exited: typeof exited
    getUser: typeof getUser
    login: typeof login
    exit: typeof exit
    logOut: typeof logOut
  }
  let GLOBAL$USER$: GLOBAL$USER$TYPE
}
export {

}
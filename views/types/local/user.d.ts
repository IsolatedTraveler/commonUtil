import {
  dealMenu, exited, getMenu, getUser, getUserInfo, login, exit, logOut
} from '../../views/g-lobal/user'
declare global {
  interface GLOBAL$USER$TYPE {
    dealMenu: typeof dealMenu
    exited: typeof exited
    getMenu: typeof getMenu
    getUser: typeof getUser
    getUserInfo: typeof getUserInfo
    login: typeof login
    exit: typeof exit
    logOut: typeof logOut
  }
  let GLOBAL$USER$: GLOBAL$USER$TYPE
}
export {

}
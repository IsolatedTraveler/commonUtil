import {
  getName, getRouterW, redirect, router
} from '../../views/g-lobal/router'
declare global {
  interface GLOBAL$ROUTER$TYPE {
    getName: typeof getName
    getRouterW: typeof getRouterW
    redirect: typeof redirect
    router: typeof router
  }
  let GLOBAL$ROUTER$: GLOBAL$ROUTER$TYPE
}
export {

}
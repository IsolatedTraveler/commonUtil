import {
  router
} from '../../g-lobal/router'
declare global {
  interface GLOBAL$ROUTER$TYPE {
    router: typeof router
  }
  let GLOBAL$ROUTER$: GLOBAL$ROUTER$TYPE
}
export {

}
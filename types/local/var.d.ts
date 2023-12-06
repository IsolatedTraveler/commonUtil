import {
  menu, that, urlBase, user
} from '../../g-lobal/var'
declare global {
  interface GLOBAL$VAR$TYPE {
    menu: typeof menu
    that: typeof that
    urlBase: typeof urlBase
    user: typeof user
  }
  let GLOBAL$VAR$: GLOBAL$VAR$TYPE
}
export {

}
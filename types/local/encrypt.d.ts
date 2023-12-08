import {
  getMd5
} from '../../g-lobal/encrypt'
declare global {
  interface GLOBAL$ENCRYPT$TYPE {
    getMd5: typeof getMd5
  }
  let GLOBAL$ENCRYPT$: GLOBAL$ENCRYPT$TYPE
}
export {

}
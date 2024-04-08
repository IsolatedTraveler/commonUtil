import {
  getMd5, encryption
} from '../../views/g-lobal/encrypt'
declare global {
  interface GLOBAL$ENCRYPT$TYPE {
    getMd5: typeof getMd5
    encryption: typeof encryption
  }
  let GLOBAL$ENCRYPT$: GLOBAL$ENCRYPT$TYPE
}
export {

}
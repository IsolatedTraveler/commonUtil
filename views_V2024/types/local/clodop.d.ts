import {
  getPrint, print
} from '../../g-lobal/clodop'
declare global {
  interface GLOBAL$CLODOP$V2024$TYPE {
    getPrint: typeof getPrint
    print: typeof print
  }
  let GLOBAL$CLODOP$V2024$: GLOBAL$CLODOP$V2024$TYPE
}
export {

}
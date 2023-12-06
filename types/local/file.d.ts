import {
  readFile
} from '../../g-lobal/file'
declare global {
  interface GLOBAL$FILE$TYPE {
    readFile: typeof readFile
  }
  let GLOBAL$FILE$: GLOBAL$FILE$TYPE
}
export {

}
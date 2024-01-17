import {
  loadJs, readFile
} from '../../g-lobal/file'
declare global {
  interface GLOBAL$FILE$TYPE {
    loadJs: typeof loadJs
    readFile: typeof readFile
  }
  let GLOBAL$FILE$: GLOBAL$FILE$TYPE
}
export {

}
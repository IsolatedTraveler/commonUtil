import {
  loadJs, readFile, loadStyle
} from '../../g-lobal/file'
declare global {
  interface GLOBAL$FILE$TYPE {
    loadJs: typeof loadJs
    readFile: typeof readFile
    loadStyle: typeof loadStyle
  }
  let GLOBAL$FILE$: GLOBAL$FILE$TYPE
}
export {

}
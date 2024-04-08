import {
  down, loadJs, readFile, loadStyle
} from '../../views/g-lobal/file'
declare global {
  interface GLOBAL$FILE$TYPE {
    down: typeof down
    loadJs: typeof loadJs
    readFile: typeof readFile
    loadStyle: typeof loadStyle
  }
  let GLOBAL$FILE$: GLOBAL$FILE$TYPE
}
export {

}
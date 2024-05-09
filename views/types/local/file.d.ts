import {
  down, loadJs, loadJsJudge, loadStyle, readFile, uploadInputFile
} from '../../g-lobal/file'
declare global {
  interface GLOBAL$FILE$TYPE {
    down: typeof down
    loadJs: typeof loadJs
    loadJsJudge: typeof loadJsJudge
    loadStyle: typeof loadStyle
    readFile: typeof readFile
    uploadInputFile: typeof uploadInputFile
  }
  let GLOBAL$FILE$: GLOBAL$FILE$TYPE
}
export {

}
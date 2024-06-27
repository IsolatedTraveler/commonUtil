import {
  closeParentPop, initLayui, openMsgBox
} from '../../g-lobal/layer'
declare global {
  interface GLOBAL$LAYER$V2024$TYPE {
    closeParentPop: typeof closeParentPop
    initLayui: typeof initLayui
    openMsgBox: typeof openMsgBox
  }
  let GLOBAL$LAYER$V2024$: GLOBAL$LAYER$V2024$TYPE
}
export {

}
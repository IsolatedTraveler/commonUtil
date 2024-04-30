import {
  alertMsg, confirmMsg, openDialog, openMsgBox
} from '../../g-lobal/layer'
declare global {
  interface GLOBAL$LAYER$V2024$TYPE {
    alertMsg: typeof alertMsg
    confirmMsg: typeof confirmMsg
    openDialog: typeof openDialog
    openMsgBox: typeof openMsgBox
  }
  let GLOBAL$LAYER$V2024$: GLOBAL$LAYER$V2024$TYPE
}
export {

}
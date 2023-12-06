import {
  alertMsg, load, loaded, loading, confirmMsg
} from '../../g-lobal/layer'
declare global {
  interface GLOBAL$LAYER$TYPE {
    alertMsg: typeof alertMsg
    load: typeof load
    loaded: typeof loaded
    loading: typeof loading
    confirmMsg: typeof confirmMsg
  }
  let GLOBAL$LAYER$: GLOBAL$LAYER$TYPE
}
export {

}
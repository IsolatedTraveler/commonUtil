import {
  alertMsg, confirmMsg, getLayui, load, loaded, loading, openPage
} from '../../g-lobal/layer'
declare global {
  interface GLOBAL$LAYER$TYPE {
    alertMsg: typeof alertMsg
    confirmMsg: typeof confirmMsg
    getLayui: typeof getLayui
    load: typeof load
    loaded: typeof loaded
    loading: typeof loading
    openPage: typeof openPage
  }
  let GLOBAL$LAYER$: GLOBAL$LAYER$TYPE
}
export {

}
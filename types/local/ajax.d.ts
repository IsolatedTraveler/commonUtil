import {
  getAjax, getAjaxSync, commonHttppost, commonQueryAsyncHttppost_callback, getConfig, upload
} from '../../g-lobal/ajax'
declare global {
  interface GLOBAL$AJAX$TYPE {
    getAjax: typeof getAjax
    getAjaxSync: typeof getAjaxSync
    commonHttppost: typeof commonHttppost
    commonQueryAsyncHttppost_callback: typeof commonQueryAsyncHttppost_callback
    getConfig: typeof getConfig
    upload: typeof upload
  }
  let GLOBAL$AJAX$: GLOBAL$AJAX$TYPE
}
export {

}
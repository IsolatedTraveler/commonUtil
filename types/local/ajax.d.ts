import {
  setAjaxContentType, setJqMode, getAjax, getAjaxSync, commonHttppost, commonQueryAsyncHttppost_callback, getConfig, upload, dealAjaxData, ajax, getAjaxRes
} from '../../g-lobal/ajax'
declare global {
  interface GLOBAL$AJAX$TYPE {
    setAjaxContentType: typeof setAjaxContentType
    setJqMode: typeof setJqMode
    getAjax: typeof getAjax
    getAjaxSync: typeof getAjaxSync
    commonHttppost: typeof commonHttppost
    commonQueryAsyncHttppost_callback: typeof commonQueryAsyncHttppost_callback
    getConfig: typeof getConfig
    upload: typeof upload
    dealAjaxData: typeof dealAjaxData
    ajax: typeof ajax
    getAjaxRes: typeof getAjaxRes
  }
  let GLOBAL$AJAX$: GLOBAL$AJAX$TYPE
}
export {

}
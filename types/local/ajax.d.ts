import {
  ajaxErrorCode, ajaxSuccessCode, setAjaxContentType, setAjaxSuccessCode, setJqMode, getAjax, getAjaxSync, commonHttppost, commonQueryAsyncHttppost_callback, getConfig, upload, dealAjaxData, ajax, getAjaxRes
} from '../../views/g-lobal/ajax'
declare global {
  interface GLOBAL$AJAX$TYPE {
    ajaxErrorCode: typeof ajaxErrorCode
    ajaxSuccessCode: typeof ajaxSuccessCode
    setAjaxContentType: typeof setAjaxContentType
    setAjaxSuccessCode: typeof setAjaxSuccessCode
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
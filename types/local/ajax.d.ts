import {
  ajaxErrorCode, ajaxSuccessCode, setAjaxContentType, setAjaxSuccessCode, setJqMode, getAjax, getAjaxSync, commonHttppost, commonQueryAsyncHttppost_callback, getConfig, upload, dealAjaxData, magicCheckAuth, magicCheckAuthV2, magicData2
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
    magicCheckAuth: typeof magicCheckAuth
    magicCheckAuthV2: typeof magicCheckAuthV2
    magicData2: typeof magicData2
  }
  let GLOBAL$AJAX$: GLOBAL$AJAX$TYPE
}
export {

}
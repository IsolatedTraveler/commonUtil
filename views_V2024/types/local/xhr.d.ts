import {
  commonQueryAsyncHttppost_callback, getAjaxAsync, commonHttppost, getAjax
} from '../../views/g-lobal/xhr'
declare global {
  interface GLOBAL$XHR$V2024$TYPE {
    commonQueryAsyncHttppost_callback: typeof commonQueryAsyncHttppost_callback
    getAjaxAsync: typeof getAjaxAsync
    commonHttppost: typeof commonHttppost
    getAjax: typeof getAjax
  }
  let GLOBAL$XHR$V2024$: GLOBAL$XHR$V2024$TYPE
}
export {

}
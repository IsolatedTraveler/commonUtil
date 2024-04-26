import {
  commonQueryAsyncHttppost_callback, getAjaxSync, commonHttppost, getAjax
} from '../../views/g-lobal/xhr'
declare global {
  interface GLOBAL$XHR$TYPE {
    commonQueryAsyncHttppost_callback: typeof commonQueryAsyncHttppost_callback
    getAjaxSync: typeof getAjaxSync
    commonHttppost: typeof commonHttppost
    getAjax: typeof getAjax
  }
  let GLOBAL$XHR$: GLOBAL$XHR$TYPE
}
export {

}
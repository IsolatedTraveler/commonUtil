import { commonHttppost, getAjax, getConfig, alertMsg } from './g-lobal'
declare global {
  interface Window {
    jthisJsObject: any
    wdphisJsObject: any
    commonUtil: any
    $: any
    layer: any
  }
  type That = {
    [index: string]: any
  }
  let that: That
  let commonHttppost: typeof commonHttppost
  let getAjax: typeof getAjax
  let getConfig: typeof getConfig
  let alertMsg: typeof alertMsg
}
export {

}
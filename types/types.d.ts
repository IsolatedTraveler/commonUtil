import { commonHttppost, getAjax, getConfig, alertMsg } from '../g-lobal'
// window
declare global {
  interface Window {
    jthisJsObject: any
    wdphisJsObject: any
    commonUtil: any
    FIRSTMODULENAME: any
    $: any
  }
  let w: Window
  let d: Document
  let MODULENAME: any
}
// layui
declare global {
  interface Window {
    layui: any
    layer: any
  }
}
// local
declare global {
  let commonHttppost: typeof commonHttppost
  let getAjax: typeof getAjax
  let getConfig: typeof getConfig
  let alertMsg: typeof alertMsg
}
export {

}
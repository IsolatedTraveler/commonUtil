import { commonHttppost, getAjax, getConfig } from './g-lobal'
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
}
export {

}
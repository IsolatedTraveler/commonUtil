import { commonQueryAsyncHttppost_callback, confirm, getUser } from './g-lobal'
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
  type layConfirm = typeof confirm
  let commonQueryAsyncHttppost_callback: typeof commonQueryAsyncHttppost_callback
  let getUser: typeof getUser
  let confirm: layConfirm
}
export {

}
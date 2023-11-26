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
}
export {

}
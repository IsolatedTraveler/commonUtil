
// window
declare global {
  interface ClassConstructor {
    new(): any;
  }
  interface Window {
    jthisJsObject: any
    wdphisJsObject: any
    commonUtil: any
    FIRSTMODULENAME: any
    $: any
    hex_md5: any
  }
  let w: Window
  let d: Document
  let MODULENAME: any
  let FIRSTMODULENAME: any
  let sha256: any
  let $: any
}
// module
declare global {
  let that: any // this
}
// layui
declare global {
  interface Window {
    layui: any
    layer: any
  }
}
export {

}
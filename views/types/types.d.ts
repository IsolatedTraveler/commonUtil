declare module 'rollup-plugin-typescript';
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
  let layui: any
  let layer: any
  let d: Document
  let MODULENAME: any
  let FIRSTMODULENAME: any
  let sha256: any
  let $: any
  let Base64: any
  const Class: any
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
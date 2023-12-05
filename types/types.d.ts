
// window
declare global {
  interface Window {
    jthisJsObject: any
    wdphisJsObject: any
    commonUtil: any
    FIRSTMODULENAME: any
    $: any
    hex_md5: any
  }
  interface GLOBALCLASSTYPE {
    getSystemVal: GetSystemVal
    commonHttppost: CommonHttppost
    getAjax: GetAjax
    setPageTemp: SetPageTemp
    ajax: Ajax
  }
  let w: Window
  let d: Document
  let MODULENAME: any
  let FIRSTMODULENAME: any
  let GLOBALCLASS: GLOBALCLASSTYPE
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
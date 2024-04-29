
declare global {
  interface GLOBAL$COMMON$TYPE {
    class: any
    // xhr
    serverUrl: string
    setServerUrl: () => string
    XHR_JQ_CODE: number
    contentType: string
  }
  let GLOBAL$COMMON$: GLOBAL$COMMON$TYPE
}
export {

}
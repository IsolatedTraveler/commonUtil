
declare global {
  interface GLOBAL$COMMON$TYPE {
    class: any
    // xhr
    contentType: string
    serverUrl: string
    setServerUrl: () => string
    getConfig: () => any
  }
  let GLOBAL$COMMON$: GLOBAL$COMMON$TYPE
}
export {

}
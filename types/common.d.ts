
declare global {
  interface GLOBAL$COMMON$TYPE {
    contentType: string
    serverUrl: string
    setServerUrl: () => string
    getConfig: () => any
  }
  let GLOBAL$COMMON$: GLOBAL$COMMON$TYPE
}
export {

}
import {
  session, local, setPageTemp, tempData
} from '../../g-lobal/temp'
declare global {
  interface GLOBAL$TEMP$TYPE {
    session: typeof session
    local: typeof local
    setPageTemp: typeof setPageTemp
    tempData: typeof tempData
  }
  let GLOBAL$TEMP$: GLOBAL$TEMP$TYPE
}
export {

}
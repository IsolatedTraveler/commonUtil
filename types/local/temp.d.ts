import {
  session, setPageTemp, tempData
} from '../../g-lobal/temp'
declare global {
  interface GLOBAL$TEMP$TYPE {
    session: typeof session
    setPageTemp: typeof setPageTemp
    tempData: typeof tempData
  }
  let GLOBAL$TEMP$: GLOBAL$TEMP$TYPE
}
export {

}
import {
  expExcel
} from '../../views/g-lobal/xlsx'
declare global {
  interface GLOBAL$XLSX$TYPE {
    expExcel: typeof expExcel
  }
  let GLOBAL$XLSX$: GLOBAL$XLSX$TYPE
}
export {

}
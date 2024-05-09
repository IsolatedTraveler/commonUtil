import {
  dealSheetToArray, expExcel, loadXlsx, readXlsx
} from '../../g-lobal/xlsx'
declare global {
  interface GLOBAL$XLSX$TYPE {
    dealSheetToArray: typeof dealSheetToArray
    expExcel: typeof expExcel
    loadXlsx: typeof loadXlsx
    readXlsx: typeof readXlsx
  }
  let GLOBAL$XLSX$: GLOBAL$XLSX$TYPE
}
export {

}
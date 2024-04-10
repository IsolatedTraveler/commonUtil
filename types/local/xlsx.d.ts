import {
  expExcel, loadXlsx, readXlsx
} from '../../views/g-lobal/xlsx'
declare global {
  interface GLOBAL$XLSX$TYPE {
    expExcel: typeof expExcel
    loadXlsx: typeof loadXlsx
    readXlsx: typeof readXlsx
  }
  let GLOBAL$XLSX$: GLOBAL$XLSX$TYPE
}
export {

}
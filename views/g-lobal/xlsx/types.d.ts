interface XlsxObj {
  SheetNames: Array<string>
  Sheets: {
    [key: string]: any
  }
}
interface XlsxSheetToType {
  header: false | number
  row: boolean
  dateNF: string
}
declare var XLSX: {
  read: (file: any, type: any) => XlsxObj
  sheets: any
  utils: {
    sheet_to_json: (v: any, type: XlsxSheetToType) => any
    sheet_to_row_object_array: (v: any, type: XlsxSheetToType) => any
  }
}
import * as xlsx from "./xlsx";
declare global {
  interface Window {
    XLSX: typeof xlsx
  }
  var XLSX: typeof xlsx
}
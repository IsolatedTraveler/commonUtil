import { dealTableName } from "../fun/1/dealVal"

export function getRowByParam(col, param, referenceLine = 1) {
  return `ROW($${col}$${referenceLine})+${param}`
}
export function getRowValByParam(col, param, referenceLine = 1, tableName = '') {
  return `INDEX(${dealTableName(tableName)}$${col}:$${col}, ${getRowByParam(col, param, referenceLine)})`
}
export function getRowValBySerialNumber(col, serialNumber, tableName = '') {
  return `INDEX(${dealTableName(tableName)}$${col}:$${col}, ${serialNumber})`
}
export function getRowByParam(col, param, referenceLine = 1) {
  return `ROW($${col}$${referenceLine})+${param}`
}
export function getRowValByParam(col, param, referenceLine = 1, tableName = '') {
  if (tableName) {
    tableName += '!'
  }
  return `INDEX(${tableName}$${col}:$${col}, ${getRowByParam(col, param, referenceLine)})`
}
export function getRowValBySerialNumber(col, serialNumber, tableName = '') {
  if (tableName) {
    tableName += '!'
  }
  return `INDEX(${tableName}$${col}:$${col}, ${serialNumber})`
}
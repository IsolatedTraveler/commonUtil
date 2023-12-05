import { dealTableName } from "../fun/1/dealVal";

export function lookUp(val, refreenceCol, valCol, area, tableName) {
  valCol = valCol || refreenceCol
  return `LOOKUP(${val},${dealTableName(tableName)}$${refreenceCol}$${area[0]}:$${refreenceCol}$${area[1]},${dealTableName(tableName)}$${valCol}$${area[0]}:$${valCol}$${area[1]})`
}
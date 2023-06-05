import { dealVal } from "../fun/1/dealVal";

export function excelIf(lx, tj, trueRes, falseRes) {
  return `IF(, ${dealVal(trueRes)}, ${dealVal(falseRes)})`
}
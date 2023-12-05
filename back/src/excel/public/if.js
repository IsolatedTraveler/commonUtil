import { dealVal } from "../fun/1/dealVal";
import { yhf } from "../fun/1/yhf";

export function excelIf(lx, tj, trueRes, falseRes) {
  return `IF(${yhf(lx, tj)} , ${dealVal(trueRes)}, ${dealVal(falseRes)})`
}
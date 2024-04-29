export interface PreciseDecimalParam {
  precision: number
  type?: 1 | 2 | 3
}
export function preciseDecimal(num: number | string, { precision, type = 1 }: PreciseDecimalParam): number | false {
  if (isNaN(num as any)) {
    return false
  }
  num = parseFloat(num as string)
  switch (type) {
    case 2:
      return Math.floor(num * Math.pow(10, precision)) / Math.pow(10, precision);
    case 3:
      return Math.ceil(num * Math.pow(10, precision)) / Math.pow(10, precision);
    default:
      return Math.round(num * Math.pow(10, precision)) / Math.pow(10, precision);
  }
}
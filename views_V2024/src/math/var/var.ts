import { that } from "../core"

export var mathBigRes: bigint = BigInt(0)
  , mathRes: number = 0
  , decimalPlaces = 0
  , maxDecimalPlaces = 0
/**
* 初始化数学计算环境。
* 
* @param v - 初始化值，默认为0。
* @returns 返回当前对象实例，以便链式调用。
*/
export function mathInit(v: number = 0) {
  mathRes = Number(v)
  decimalPlaces = 0
  mathBigRes = getMathParam(v.toString())
  decimalPlaces = maxDecimalPlaces
  return that
}
/**
 * 将数字的字符串表示转换为BigInt类型，同时考虑到小数点后的位数。
 * 此函数会根据输入值和预定义值中较大的小数位数来调整值。
 *
 * @param v - 需要转换的数字的字符串表示。
 * @returns 返回根据小数位数调整后的BigInt类型的数值。
 */
export function getMathParam(v: string): bigint {
  const res = v.split('.')
    , paramDecimalPlaces = (res[1] || '').length
  maxDecimalPlaces = Math.max(decimalPlaces, paramDecimalPlaces)
  return BigInt(res[0] + (res[1] || '')) * BigInt(10 ** (maxDecimalPlaces - paramDecimalPlaces))
}
/**
 * 调整mathBigRes的值，使其精度匹配maxDecimalPlaces所定义的小数位数。
 * 通过将mathBigRes乘以10的幂次方（maxDecimalPlaces与decimalPlaces之差），
 * 然后将decimalPlaces设置为与maxDecimalPlaces相等，以达到调整精度的目的。
 */
export function setMathBigRes() {
  mathBigRes *= BigInt(10 ** (maxDecimalPlaces - decimalPlaces))
  decimalPlaces = maxDecimalPlaces
}
/**
 * 设置mathRes和mathBigRes变量的值，根据传入的bigint值和小数位数进行格式化。
 * 
 * @param res - 要设置的BigInt值。
 * @param len - 可选参数，用于指定整数部分的长度，如果没有指定则使用decimalPlaces的值。
 * @param decimal - 可选参数，用于指定小数部分的值。
 * 
 * 此函数会根据传入的参数计算出整数和小数部分的字符串表示，
 * 并根据指定的总长度进行左补零，最后更新mathRes和mathBigRes变量。
 */
export function setMathRes(res: bigint, len: number = decimalPlaces, decimal: number = 0) {
  var decimalStr = decimal.toString().split('.')[1] || ''
    , isNegative = res < 0
    , absStr = `${res.toString().replace('-', '')}${decimalStr}`
    , absLen = absStr.length
  len += decimalStr.length
  if (absLen <= len) {
    absStr = '0'.repeat(len - absLen + 1) + absStr
  }
  len = len == 0 ? absStr.length : -len
  decimalStr = absStr.slice(len).replace(/0+$/, '') || ''
  decimalPlaces = decimalStr.length
  mathRes = Number(`${isNegative ? '-' : ''}${absStr.slice(0, len)}.${decimalStr}`)
  mathBigRes = BigInt(`${isNegative ? '-' : ''}${absStr.slice(0, len)}${decimalStr}`)
}
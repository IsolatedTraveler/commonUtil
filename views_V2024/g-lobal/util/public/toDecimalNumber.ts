/**
 * @description 将给定数值转换为指定精度的十进制数格式。
 * 如果输入为空，则默认为''。
 * 支持对精度的处理，并包含异常捕获确保程序稳定运行。
 *
 * @param {any} num - 待转换的数值，可以是数字或字符串形式，空字符串将被视为0。
 * @param {any} precision - 要保留的小数位数，非数字或负数时将返回原始num值。
 * @returns {string} - 格式化后的十进制数字符串。
 */
export function toDecimalNumber(num: string | number, precision?: number | undefined): string {
  num = num || ''
  if (typeof precision === 'number' && precision >= 0 && !isNaN(num as any)) {
    return parseFloat(num as string).toFixed(precision)
  }
  return String(num)
}
/**
 * @description 将数字转换为指定精度的十进制字符串表示形式。
 *
 * @param {number} num - 待转换的数值。
 * @param {PositiveInteger} [precision] - 期望的精度，即小数点后保留的位数。默认为undefined，此时不进行格式化处理。
 * @returns {string} -  格式化后的字符串（如果指定了精度），或者原始数字（如果没有指定精度或输入非数字）。
 */
export function toDecimalNumber(num: number, precision?: number): string | number {
  if (precision && precision >= 0) {
    return num.toFixed(precision)
  }
  return num
}
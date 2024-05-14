/**
 * @description 将给定的数字或数字字符串转换为指定精度的十进制字符串表示。
 * 如果输入不能转换为数字，则直接返回输入值。
 * @param {number | string} num - 需要转换的数字或数字字符串。
 * @param {number} [precision=2] - 期望的精度，即小数点后保留的位数。默认为2
 * @returns {string} -  转换后的字符串（如果指定了精度）或原始输入值（如果转换失败或未指定精度）。
 */
export function toDecimalNumber(num: number | string, precision: number = 2): string | number {
  if (isNaN(num as number)) return num
  return precision >= 0 ? Number(num).toFixed(precision) : num
}
import { mathRes } from "../var";
/**
 * 将当前存储的数值转换为固定小数点位数的字符串表示形式。
 * 
 * @param v - 指定输出字符串中小数点后的位数，默认为2。
 * @returns 返回格式化后的字符串，其中小数点后的位数由参数v决定。
 */
export function toFixed(v: number = 2) {
  return mathRes.toFixed(v)
}
import { getMathParam, mathBigRes, setMathBigRes, setMathRes } from "../var";
import { that } from "../core";
/**
 * 执行反向减法运算，即从给定的值中减去当前存储的值。
 * 
 * @param v - 减数，可以是数字、字符串或大整数类型。字符串会被转换为相应的数字类型。
 * @returns 返回当前对象实例，允许进行链式调用。
 *          注意：本测试不检查链式调用的效果。
 */
export function reSubtract(v: number | string | bigint) {
  const res = getMathParam(v.toString())
  setMathBigRes()
  setMathRes(res - mathBigRes)
  return that
}
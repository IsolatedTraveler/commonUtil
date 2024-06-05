import { getMathParam, mathBigRes, setMathBigRes, setMathRes } from "../var";
import { that } from "../core";
/**
 * 执行减法运算。
 * 
 * @param v - 被减数，可以是数字、字符串或大整数类型。
 *            字符串会被转换为相应的数字类型。
 * @returns 返回当前对象实例，允许进行链式调用。
 *          注意：本测试不检查链式调用的效果。
 */
export function subtract(v: number | string | bigint) {
  const res = getMathParam(v.toString())
  setMathBigRes()
  setMathRes(mathBigRes - res)
  return that
}
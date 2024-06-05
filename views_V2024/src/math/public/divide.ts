import { that } from "../core";
import { getMathParam, mathBigRes, setMathBigRes, setMathRes } from "../var";
/**
 * 对当前对象的值执行除法操作，使用传入的值作为除数。
 * 
 * @param v - 作为除数的数值，可以是数字、字符串或BigInt类型。
 * 
 * 此函数首先将传入的参数转换为字符串表示形式，然后通过调用getMathParam函数获取其BigInt表示。
 * 接下来，调用setMathBigRes函数来更新mathBigRes以匹配当前的精度设置。
 * 计算mathBigRes与res的模（余数），并将其转换为数字类型。
 * 使用setMathRes函数设置mathRes变量，其中包含mathBigRes与res的商的整数部分和余数与res的比例作为小数部分。
 * 
 * @returns 返回当前对象实例，以便于链式调用，但此示例中不用于链式调用。
 */
export function divide(v: number | string | bigint) {
  const res = getMathParam(v.toString())
  setMathBigRes()
  const mod = mathBigRes % res
  setMathRes(mathBigRes / res, 0, Number(mod) / Number(res))
  return that
}
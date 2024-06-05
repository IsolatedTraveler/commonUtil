import { getMathParam, mathBigRes, setMathBigRes, setMathRes } from "../var";
import { that } from "../core";
/**
 * 对当前对象的值执行除法操作，使用当前的mathBigRes作为除数。
 * 
 * @param v - 要除以的数值，可以是数字、字符串或BigInt类型。
 * 
 * 此函数首先将传入的参数转换为字符串表示形式，然后通过调用getMathParam函数获取其BigInt表示。
 * 接下来，调用setMathBigRes函数来更新mathBigRes以匹配当前的精度设置。
 * 计算res与mathBigRes的模（余数），并将其转换为数字类型。
 * 使用setMathRes函数设置mathRes变量，其中包含res与mathBigRes的商的整数部分和余数与mathBigRes的比例作为小数部分。
 * 
 * @returns 返回当前对象实例，以便于链式调用，但此示例中不用于链式调用。
 */
export function reDivide(v: number | string | bigint) {
  const res = getMathParam(v.toString())
  setMathBigRes()
  const mod = res % mathBigRes
  setMathRes(res / mathBigRes, 0, Number(mod) / Number(mathBigRes))
  return that
}
import { decimalPlaces, getMathParam, mathBigRes, setMathBigRes, setMathRes } from "../var";
import { that } from "../core";
/**
 * 对当前对象的值进行乘法操作。
 * 
 * @param v - 要乘以的数值，可以是数字、字符串或BigInt类型。
 * 
 * 此函数首先将传入的参数转换为其字符串表示形式，然后通过调用getMathParam函数获取对应的BigInt表示。
 * 接着，调用setMathBigRes函数更新mathBigRes变量以匹配当前的精度设置。
 * 最后，使用setMathRes函数设置mathRes变量，其中包含当前mathBigRes变量与新获得的BigInt值的乘积。
 * 乘法操作后的小数位数是原小数位数的两倍。
 * 
 * @returns 返回当前对象，但此示例中不用于链式调用。
 */
export function multiply(v: number | string | bigint) {
  const res = getMathParam(v.toString())
  setMathBigRes()
  setMathRes(mathBigRes * res, decimalPlaces * 2)
  return that
}
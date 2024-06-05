import { that } from "../core";
import { getMathParam, mathBigRes, setMathBigRes, setMathRes } from "../var";
/**
 * 对当前对象的值进行加法操作。
 * 
 * @param v - 要加上的数值，可以是数字、字符串或BigInt类型。
 * 
 * 此函数首先将传入的参数转换为其字符串表示形式，然后通过调用getMathParam函数获取对应的BigInt表示。
 * 接着，调用setMathBigRes函数对mathBigRes变量进行更新，以确保它与当前的精度设置一致。
 * 最后，使用setMathRes函数将mathBigRes与新获得的BigInt值相加，并更新mathRes变量。
 * 
 * @returns 返回当前对象，支持链式调用。
 */
export function add(v: number | string | bigint) {
  const res = getMathParam(v.toString())
  setMathBigRes()
  setMathRes(mathBigRes + res)
  return that
}
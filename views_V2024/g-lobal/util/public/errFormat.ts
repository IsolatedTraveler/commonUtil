import { GLobalRes, GLobalResCode } from "../../type";

/**
 * @description 格式化错误信息为统一对象
 * 
 * @param {string} message 错误描述信息
 * @param {GLobalResCode} [code = -1] 错误代码，默认为-1
 * @returns {GLobalRes} 返回一个包含错误码、错误信息和数据的响应对象，其中数据默认为null。
 */
export function errFormat(message: string, code: GLobalResCode = -1): GLobalRes {
  return { code, message, data: null }
}
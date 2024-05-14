import { GLobalRes, GLobalResCode } from "../../type";

/**
 * @description 格式化错误信息为统一对象
 * 
 * @param message 错误描述信息
 * @param code 错误代码，默认为-1
 * @returns 返回包含错误代码和错误消息的对象
 */
export function errFormat(message: string, code: GLobalResCode = -1): GLobalRes {
  return { code, message, data: null }
}
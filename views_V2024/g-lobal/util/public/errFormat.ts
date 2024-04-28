/**
 * @description 格式化错误信息为统一对象
 * 
 * @param message 错误描述信息
 * @param code 错误代码，默认为-1
 * @returns 返回包含错误代码和错误消息的对象
 */
export interface UtilResFormat {
  code: number
  message?: string
  data: any
}
export function errFormat(message: string, code = -1): UtilResFormat {
  return { code, message, data: {} }
}
import { errFormat } from "../../util/public/errFormat"
import { AJAX_RES } from "../var"
/* 
 * 处理 XMLHttpRequest 响应的函数。
 *
 * @param {XMLHttpRequest} xhr - XMLHttpRequest 实例，包含了从服务器返回的全部响应信息。
 * @returns {any | string} 返回解析后的数据对象（如果成功且响应为JSON格式），
 *                          原始响应文本（如果解析JSON失败），或者错误信息字符串（HTTP状态码非2xx时）。
 *
 * 函数首先检查HTTP响应状态码是否在200至299之间，这表示请求成功。
 * - 如果请求成功，尝试将响应体（responseText）解析为JSON对象。
 *   - 在解析前，设定数据对象的'message'字段为'message'或'msg'中的一个（如果存在），
 *     以兼容不同API的响应格式。
 *   - 同时，修正数据对象的'code'字段，如果其值为字符串'1'，则转换为数字1。
 *   - 解析成功则返回处理后的数据对象。
 *   - 如果解析JSON时发生错误，则直接返回响应体的原始文本。
 * - 如果请求失败（HTTP状态码不在200-299范围内），则调用外部的`errFormat`函数，
 *   使用`AJAX_RES`对象中相应状态码的错误信息，组合成错误字符串返回。
 *
 * 注意：此函数依赖于外部的`errFormat`函数和`AJAX_RES`对象的定义。
 */
export function dealXhrRes(xhr: XMLHttpRequest): any {
  if (xhr.status >= 200 && xhr.status < 300) {
    try {
      var data = JSON.parse(xhr.responseText)
      data.message = data.message || data.msg
      data.code = data.code === '1' ? 1 : data.code
      return data
    } catch (e) {
      return xhr.responseText
    }
  } else {
    return errFormat('请求失败：' + AJAX_RES[xhr.status])
  }
}
import { AjaxRequestConfig, XhrAuthParam } from "../../../../type";
import { Authorization, getAuthorization, XHR_JQ_URL } from "../var";
/**
 * @description 检查请求是否需要进行鉴权处理
 * @param {AjaxRequestConfig} config - HTTP请求的配置对象，用于存储鉴权后的头部信息
 * @param {string} url - 请求的URL，用于判断是否为特定的鉴权URL
 * @param {{ isCheck?: boolean, reset?: boolean }} options - 配置项，包括是否执行鉴权检查（isCheck，默认为true）和是否重置鉴权信息（reset，默认为false）
 * @returns {Promise<boolean>} - 表示鉴权是否成功的Promise
 */
export function checkAuth(url: string, config: AjaxRequestConfig = {}, { isCheck = true, reset = false }: XhrAuthParam): Promise<Boolean> {
  // url 等于 鉴权url  直接返回
  if (url === XHR_JQ_URL) return Promise.resolve(true)
  // 不鉴权  返回
  if (!isCheck) return Promise.resolve(false)
  // 通过是否重置鉴权参数 和 鉴权信息判断是否重新获取鉴权信息
  let isAuthenticated = reset || !Authorization
  return getAuthorization(isAuthenticated).then(() => {
    // 鉴权信息写入请求
    config.headers = config.headers || {}
    config.headers.accessToken = Authorization === true ? undefined : Authorization;
    return isAuthenticated
  })
}
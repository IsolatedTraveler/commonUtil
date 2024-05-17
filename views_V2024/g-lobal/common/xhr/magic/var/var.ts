import { getXhr } from "../../../../xhr/fun/getXhr"
import { session } from "../../../../util/public/session"
import { DEFAULT_AUTH_USER, XHR_JQ_URL } from "./const"

export var Authorization: string | true = '' // 初始化鉴权令牌变量
/**
 * @description 根据条件获取鉴权信息
 * @param {boolean} judge - 是否需要执行获取鉴权信息的操作
 * @returns {Promise<void>} - 表示操作完成的Promise，无具体返回值
 */
export function getAuthorization(judge: Boolean): Promise<void> {
  // 判断是否获取鉴权信息
  if (!judge) return Promise.resolve()
  // 获取鉴权参数
  const user = session('magicUser') || (session('magic') || {}).user || DEFAULT_AUTH_USER
  // 发起鉴权请求 并设置鉴权信息
  return getXhr(XHR_JQ_URL, JSON.stringify(user), {}, 'POST', 'service', {}).then((res) => {
    Authorization = res.data.accessToken || true
  }).catch(() => {
    Authorization = true
  })
}
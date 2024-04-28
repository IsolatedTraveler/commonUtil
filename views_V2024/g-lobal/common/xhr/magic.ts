import { AjaxRequestConfig } from "../../../../types"
import { getConfig } from "../../system"
import { extractPrimaryUrl } from "../../url/fun"
import { session } from "../../util/public/session"
import { commonHttppost } from "../../xhr"

export const contentType = 'application/json; charset=utf-8',
  XHR_JQ_CODE = 101 // 服务器返回的需要鉴权的标志（鉴权过失效，第三方鉴权等情况导致鉴权失败）
const XHR_JQ_URL = '/magic/oauth/login', // 服务器鉴权信息
  DEFAULT_AUTH_USER = { // 默认鉴权账号信息
    zh: '',
    mm: ''
  }
// 初始化鉴权令牌变量
var Authorization: string | true = ''
/**
 *  @description 设置服务端URL。此函数从应用程序配置中提取主要的服务端URL。
 * 首先通过`getConfig()`获取配置信息，然后从配置的`magicServer`属性中提取主要URL。
 * @returns {string} 设置后的服务端URL。
 */
export function setServerUrl(): string {
  return GLOBAL$COMMON$.serverUrl = extractPrimaryUrl(getConfig().magicServer)
}
// 实现checkAuth方法
function checkAuth(config: AjaxRequestConfig, url: string, reset: boolean = false) {
  if (url === XHR_JQ_URL) {
    return
  }
  if (reset || !Authorization) {
    getAuthorization()
  }
  config.headers = config.headers || {}
  config.headers.accessToken = Authorization === true ? undefined : Authorization;
}
// 获取鉴权令牌的函数
function getAuthorization() {
  try {
    const user = session('magicUser') || (session('magic') || {}).user || DEFAULT_AUTH_USER
      , res: any = commonHttppost(XHR_JQ_URL, user, { isNotGetUser: true, isNotWrapped: true }) || {}
    Authorization = res.data.accessToken || true
  } catch (e) {
    Authorization = true  // 在异常情况下设置为true，表示无需鉴权
  }
}
GLOBAL$COMMON$.class.prototype.checkAuth = checkAuth
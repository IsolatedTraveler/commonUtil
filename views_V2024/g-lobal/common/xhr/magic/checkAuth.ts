import { AjaxRequestConfig, AjaxRequestOption } from "../../../../../types";
import { session } from "../../../util/public/session";
import { commonHttppost } from "../../../xhr";
import { DEFAULT_AUTH_USER, XHR_JQ_URL } from "./const";
// 初始化鉴权令牌变量
var Authorization: string | true = ''
// 实现checkAuth方法
export function checkAuth(config: AjaxRequestConfig, option: AjaxRequestOption, url: string, reset: boolean = false) {
  if (url === XHR_JQ_URL) {
    return
  }
  if (reset || !Authorization) {
    option.isCheck = false
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
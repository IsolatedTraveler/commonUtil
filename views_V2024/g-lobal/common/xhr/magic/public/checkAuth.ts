import { AjaxRequestConfig, AjaxRequestOption } from "../../../../../../types";
import { session } from "../../../../util/public/session";
import { DEFAULT_AUTH_USER, XHR_JQ_URL } from "../const";
// 初始化鉴权令牌变量
var Authorization: string | true = ''
/**
 * @description 检查并设置AJAX请求的鉴权信息。
 * 
 * @param {AjaxRequestConfig} config - AJAX请求的配置对象，将会被修改以添加或更新鉴权头信息。
 * @param {AjaxRequestOption} option - AJAX请求的选项对象，用于控制是否需要进行鉴权检查。
 * @param {string} url - 当前请求的URL，用于判断是否需要跳过特定的内部处理。
 * @param {boolean} [reset=false] - 是否重置鉴权信息，如果为真，将强制重新获取鉴权令牌。
 * 
 * 此函数主要做了以下几件事：
 * 1. **跳过特定URL**: 如果请求的URL与`XHR_JQ_URL`相同，则直接返回，不做鉴权处理。
 * 2. **鉴权逻辑控制**: 当需要重置鉴权信息或当前鉴权令牌未设置时，关闭此次请求的鉴权检查，并调用`getAuthorization`方法获取新的鉴权令牌。
 * 3. **设置鉴权头**: 更新请求配置的`headers`属性，加入`accessToken`。如果鉴权令牌有效，则设置其值；如果为`true`（表示无需鉴权或鉴权失败），则不设置此头信息。
 */
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
/**
 * @description 获取或刷新鉴权令牌的函数。
 * 
 * 此函数尝试从客户端会话存储中检索用户信息，并使用这些信息通过AJAX请求向服务器获取新的鉴权令牌。
 * 如果过程中出现任何异常，函数会默认设置鉴权状态为无需鉴权（`true`），以保证系统能够继续运行，尽管可能需要进一步的人工干预或错误处理。
 * 
 * 主要步骤包括：
 * 1. **用户信息检索**: 从会话存储中查找`magicUser`信息，如果不存在，则尝试从`magic`对象中提取用户信息，最后使用默认认证用户信息（`DEFAULT_AUTH_USER`）作为备选。
 * 2. **发送鉴权请求**: 使用全局的XHR工具函数`GLOBAL$XHR$V2024$.commonHttppost`向预定义的URL（`XHR_JQ_URL`）发送POST请求，携带用户信息，并设置特定选项以控制请求行为（如不获取用户信息、不包装响应等）。
 * 3. **处理响应与异常**: 如果请求成功，从响应的`data`中提取`accessToken`并更新全局鉴权变量`Authorization`。如果响应无效或发生任何异常，将鉴权状态设置为`true`，意味着放弃鉴权要求。
 */
function getAuthorization() {
  try {
    const user = session('magicUser') || (session('magic') || {}).user || DEFAULT_AUTH_USER
      , res: any = GLOBAL$XHR$V2024$.commonHttppost(XHR_JQ_URL, user, { isNotGetUser: true, isNotWrapped: true }) || {}
    Authorization = res.data.accessToken || true
  } catch (e) {
    Authorization = true  // 在异常情况下设置为true，表示无需鉴权
  }
}
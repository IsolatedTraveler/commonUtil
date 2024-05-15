import { session } from "../../../../util/public/session"
import { DEFAULT_AUTH_USER, XHR_JQ_URL } from "./const"

export var Authorization: string | true = '' // 初始化鉴权令牌变量
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
export function getAuthorization() {
  try {
    const user = session('magicUser') || (session('magic') || {}).user || DEFAULT_AUTH_USER
    // , res: any = GLOBAL$XHR$V2024$.commonHttppost(XHR_JQ_URL, user, { isNotGetUser: true, isNotWrapped: true }) || {}
    // Authorization = res.data.accessToken || true
  } catch (e) {
    Authorization = true  // 在异常情况下设置为true，表示无需鉴权
  }
}
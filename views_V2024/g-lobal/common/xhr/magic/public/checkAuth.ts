import { AjaxRequestConfig, AjaxRequestOption } from "../../../../../../types";
import { Authorization, getAuthorization } from "../var";
import { XHR_JQ_URL } from "../var/const";
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
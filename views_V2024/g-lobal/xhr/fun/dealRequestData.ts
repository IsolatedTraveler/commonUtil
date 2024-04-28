import { AjaxRequestConfig, AjaxRequestOption, AjaxRequestType } from "../../../../types"
import { getUser } from "../../system"
/**
 * @param {any} data - 需要发送的基础数据对象，可以包含任何类型的数据。
 * @param {AjaxRequestOption} [option={}] - 请求的附加选项对象，用于进一步配置请求，如自定义头信息等。
 * @param {AjaxRequestConfig} [config={}] - 请求的配置对象，可能包含认证信息、超时设置等高级配置。
 * @param {AjaxRequestType} [type='POST'] - 请求类型，默认为POST，可选值有'GET', 'POST', 'PUT', 'DELETE'等。
 *
 * @returns {string} - 返回处理后的数据字符串，如果是默认处理逻辑，则返回包含用户信息与请求数据的JSON字符串。
 *
 * @description 处理Ajax请求的数据预处理逻辑。
 * - 如果存在`that.dealAjaxData`方法，则调用此方法处理数据，该方法应由外部实现并返回处理后的数据。
 * - 若无上述方法，则默认行为是将当前用户的登录信息（通过`getUser()`获取）与`data`合并，
 *   并将合并后的对象转换为JSON字符串，适用于大多数需要携带用户身份信息的请求场景。
 */
export function dealRequestData(data: any,
  option: AjaxRequestOption = {},
  config: AjaxRequestConfig = {}, type: AjaxRequestType = 'POST') {
  if (that && that.dealAjaxData) {
    return that.dealAjaxData(data, option, config, type)
  } else {
    return JSON.stringify(Object.assign({}, getUser(), data))
  }
}
import { AjaxRequestConfig, AjaxRequestOption, AjaxRequestType } from "../../../../types"
import { getUser } from "../../common"
/**
 * @param {any} data - 需要发送的数据对象。
 * @param {AjaxRequestOption} [option={}] - 请求的可选配置对象，默认为空对象。
 * @param {AjaxRequestConfig} [config={}] - 通用的Ajax请求配置，默认为空对象。
 * @param {AjaxRequestType} [type='POST'] - 请求类型，默认为'POST'。
 *
 * @returns {string} 返回处理后的数据字符串，准备用于Ajax请求的发送。
 *
 * @description 功能描述：
 * 1. 检查`option.isCheck`是否为`false`，但此处漏写了对应的逻辑处理，可能是一个待完成的条件判断。
 * 2. 如果存在`that`对象且其具有`dealAjaxData`方法，则调用该方法处理数据，优先使用自定义逻辑。
 * 3. 若`option.isNotGetUser`不为`true`，则将全局的用户信息`getUser()`与`data`合并。
 * 4. 根据`option.isNotWrapped`决定数据是否需要额外包装。如果不包装（默认行为或明确指定不包装），直接将数据序列化为JSON字符串。
 *    否则，将数据放入一个带有"data"键的对象中再进行序列化，这种做法常见于需要在服务端解析特定格式的场景。
 */
export function dealRequestData(data: any,
  option: AjaxRequestOption = {},
  config: AjaxRequestConfig = {}, type: AjaxRequestType = 'POST') {
  option.isCheck !== false
  if (that && that.dealAjaxData) {
    return that.dealAjaxData(data, option, config, type)
  }
  if (!option.isNotGetUser) {
    const user = getUser()
    data = Object.assign({}, {
      czryid: user.ryid,
      czryjgid: user.jgid,
      czryjgmc: user.jgmc,
      czryjgjc: user.jgjc,
      czryyhm: user.yhm,
      czryxm: user.xm || user.username,
      superadmin: user.superadmin
    }, data)
  }
  if (option.isNotWrapped) {
    return JSON.stringify(data)
  }
  return JSON.stringify({ data })
}
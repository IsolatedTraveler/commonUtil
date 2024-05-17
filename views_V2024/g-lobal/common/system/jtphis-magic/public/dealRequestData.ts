import { AjaxRequestOption } from "../../../../type/xhr"
import { getUser } from "./getUser"
/**
 * 处理请求数据，根据配置选项对数据进行预处理。
 *
 * 此函数会对传入的数据对象进行一系列的加工处理，包括但不限于：
 * - 根据`option.isNotGetUser`决定是否合并当前用户信息到数据中。
 * - 若数据中包含分页参数，则统一转换为`page`和`size`格式。
 * - 最后根据`option.isNotWrapped`决定是否将数据包装在"data"键下进行序列化。
 *
 * @param {any} data - 原始请求数据对象，将被处理和/或附加其他信息。
 * @param {AjaxRequestOption} [option={}] - 处理数据的选项配置，默认为空对象。
   - `isNotGetUser`: 布尔值，指示是否不获取并添加用户信息到请求数据中。
   - `isNotWrapped`: 布尔值，指示是否不将数据包裹在"data"键内返回，直接返回原始数据对象的序列化形式。
 *
 * @returns {string} - 处理后的数据，以JSON字符串的形式返回，适配Ajax请求的发送。
 */
export function dealRequestData(data: any, option: AjaxRequestOption = {}) {
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
  if (data.pageSize || data.pageNumber) {
    data.page = data.page || data.pageNumber
    data.size = data.size || data.pageSize
  }
  if (option.isNotWrapped) {
    return JSON.stringify(data)
  }
  return JSON.stringify({ data })
}
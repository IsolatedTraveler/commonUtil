import { encryption } from "../../encrypt"
import { AjaxRequestConfig, AjaxRequestOption, AjaxRequestType } from "../type"
import { contentType } from "../var"

export function dealAjaxData(
  data: any,
  {
    isNotGetUser,
    isBase64,
    isPwd
  }: AjaxRequestOption = {},
  {
    contentType: content = contentType
  }: AjaxRequestConfig = {},
  type: AjaxRequestType) {
  if (data && data.page) {
    data.pageNumber = data.page
    data.pageSize = data.size
  }
  if (!isNotGetUser) {
    // eslint-disable-next-line no-import-assign
    let user = GLOBAL$USER$.getUser() || {}
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
  if (isPwd) {
    return encryption(data)
  } else if (isBase64) {
    return new Base64().encode(JSON.stringify(data))
  } else if (type !== 'GET') {
    if (content === 'application/json; charset=utf-8') {
      return JSON.stringify(data)
    } else {
      return { data: JSON.stringify(data) }
    }
  } else {
    return data
  }
}
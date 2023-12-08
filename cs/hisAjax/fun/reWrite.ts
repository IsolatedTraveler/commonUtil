import { AjaxRequestConfig, AjaxRequestOption, AjaxRequestType } from "../../../g-lobal/ajax/type"
export interface HisAjaxRequestOption extends AjaxRequestOption {
  isBase64?: boolean
  isPwd?: boolean
  isJson?: boolean
}
export function dealAjaxData(
  data: any,
  {
    isNotGetUser,
    isBase64,
    isPwd,
    isJson
  }: HisAjaxRequestOption = {},
  {
    contentType
  }: AjaxRequestConfig = {},
  type: AjaxRequestType) {
  if (data && data.page) {
    data.pageNumber = data.page
    data.pageSize = data.size
  }
  if (!isNotGetUser) {
    // eslint-disable-next-line no-import-assign
    let user = that.getUser() || {}
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
    return that.getBase64().encode(JSON.stringify(data))
  } if ((!contentType && contentType !== false) && type !== 'GET') {
    return { data: JSON.stringify(data) }
  } else {
    return data
  }
}
function encryption(data: any) {
  if (typeof data !== 'string') {
    data = JSON.stringify(data)
  }
  return {
    data
    , sstoken: JSON.stringify({ certno: '1', sign: that.getJse().encrypt(sha256(data)) })
  }
}
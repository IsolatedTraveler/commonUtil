import { AjaxRequestOption } from "../../../g-lobal/ajax/type"

export function dealAjaxData(data: any,
  {
    isNotGetUser,
    isBase64,
    isPwd,
    isNotWrapped
  }: AjaxRequestOption = {}) {
  if (data.pageSize) {
    data.page = data.pageNumber
    data.size = data.pageSize
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
  if (isNotWrapped) {
    return JSON.stringify(data)
  }
  return JSON.stringify({ data })
}
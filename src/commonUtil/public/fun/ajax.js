import { that } from "../../var/init";

export {
  ajaxASync,
  ajaxSync,
  getAjax,
  getAjaxSync,
  commonHttppost,
  commonQueryAsyncHttppost_callback
} from "../../../../global/ajax/public/ajax";

export function dealAjaxData(data, { isNotGetUser, contentType } = {}, type) {
  if (!isNotGetUser) {
    let user = that.getUser()
    if (user) {
      data = Object.assign({}, {
        czryid: user.ryid,
        czryjgid: user.jgid,
        czryjgmc: user.jgmc,
        czryjgjc: user.jgjc,
        czryyhm: user.yhm,
        czryxm: user.xm || user.username,
        superadmin: user.superadmin
      }, data)
      return data
    } else {
      that.logOut()
    }
  }
  if (!contentType && type !== 'GET') {
    return JSON.stringify(data)
  } else {
    return data
  }
}
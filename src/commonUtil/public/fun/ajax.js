
export {
  getAjax,
  getAjaxSync,
  commonHttppost,
  commonQueryAsyncHttppost_callback,
  upload
} from "../../../../g-lobal/";

export function dealAjaxData(data, { isNotGetUser } = {}, { contentType } = {}, type) {
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
    } else {
      that.logOut()
    }
  }
  if ((!contentType && contentType !== false) && type !== 'GET') {
    return JSON.stringify(data)
  } else {
    return data
  }
}
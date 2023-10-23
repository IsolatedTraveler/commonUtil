import { BASE64, jse } from "../../var/init"
import user from "../../../../g-lobal/base/var/user"
export function getPostData(data, isGetUser, isBase64, isPwd, isJson) {
  if (isGetUser) {
    user = that.getUser() || {}
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
    return that.encryption(data)
  } else if (isBase64) {
    return BASE64.encode(JSON.stringify(data))
  } else if (isJson) {
    return { data: JSON.stringify(data) }
  }
  return data
}
export function encryption(data) {
  if (typeof data !== 'string') {
    data = JSON.stringify(data)
  }
  return {
    data
    , sstoken: JSON.stringify({ certno: '1', sign: jse.encrypt(sha256(data)) })
  }
}
export default {
  getPostData,
  encryption
}
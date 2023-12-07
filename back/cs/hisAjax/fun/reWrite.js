import { user } from '../../../g-lobal/allVar'
export function dealAjaxData(data, { isNotGetUser, isBase64, isPwd, isJson } = {}, { contentType } = {}, type) {
  if (data && data.page) {
    data.pageNumber = data.page
    data.pageSize = data.size
  }
  if (!isNotGetUser) {
    // eslint-disable-next-line no-import-assign
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
    return encryption(data)
  } else if (isBase64) {
    return that.getBase64().encode(JSON.stringify(data))
  } if ((!contentType && contentType !== false) && type !== 'GET') {
    return { data: JSON.stringify(data) }
  } else {
    return data
  }
}
function encryption(data) {
  if (typeof data !== 'string') {
    data = JSON.stringify(data)
  }
  return {
    data
    , sstoken: JSON.stringify({ certno: '1', sign: that.getJse().encrypt(sha256(data)) })
  }
}
export default {
  dealAjaxData
}
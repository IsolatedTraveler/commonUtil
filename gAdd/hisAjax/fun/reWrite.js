import { setPageTemp } from '../../../global/base/fun/1/pageTemp'
import { user } from '../../../global/base/var/user'
import { urlServer } from '../var/index'
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
function getMainUrl(arr) {
  if (typeof arr === 'string') {
    arr = [arr]
  }
  let len = arr.length
  for (let i = 0; i < len; i++) {
    if (arr[i].indexOf(location.origin) > -1) {
      return arr[i]
    }
  }
  return arr[0]
}
function setServiceUrl() {
  // eslint-disable-next-line no-import-assign
  return urlServer = getMainUrl(that.getConfig().hisUrl)
}
export function getServiceUrl() {
  return setPageTemp(urlServer, setServiceUrl)
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
  dealAjaxData,
  getServiceUrl
}
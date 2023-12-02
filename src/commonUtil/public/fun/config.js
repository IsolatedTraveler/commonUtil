// eslint-disable-next-line no-unused-vars
import { Authorization } from "../../../../g-lobal/allVar";
import { ajaxJqMagic } from "../../../../types/const";

export function getToken(config) {
  let magic = that.session('magic') || that.getConfig('magic')
  Authorization = that.session('Authorization') || magic.Authorization
  if (Authorization && Authorization == magic.Authorization) {
    setToken(magic.user)
  } else {
    // 校验token是否临近过期，如果是需替换，如果否不做任何处理
  }
  config.headers = config.headers || {}
  config.headers.Authorization = Authorization
}
function setToken(param) {
  that.session('Authorization', Authorization)
  let res = that.commonHttppost(ajaxJqMagic.url, {}, { param, isNotGetUser: true }, { headers: { Authorization } })
  Authorization = res.Authorization
  that.session('Authorization', Authorization)
}
export default {
  getToken
}
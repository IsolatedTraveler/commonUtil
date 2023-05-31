// eslint-disable-next-line no-unused-vars
import { getConfig } from "../../../../global/ajax/public/ajax";
export { getConfig } from "../../../../global/ajax/public/ajax";
import { Authorization, jqUrl } from "../../../../global/ajax/var/ajax";
import { that } from "../../var/init";
import { commonHttppost } from "./ajax";

export function getToken(config) {
  let magic = getConfig('magic')
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
  let res = commonHttppost(jqUrl, {}, {param, isNotGetUser: true}, {headers: {Authorization}})
  Authorization = res.Authorization
  that.session('Authorization', Authorization)
}
export default {
  getConfig,
  getToken
}
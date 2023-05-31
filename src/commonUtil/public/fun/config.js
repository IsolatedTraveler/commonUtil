// eslint-disable-next-line no-unused-vars
import { Authorization, dataConfig, jqUrl } from "../../../../global/ajax/var/ajax";
import { that } from "../../var/init";
import { commonHttppost, getAjax } from "./ajax";
import { setPageTemp } from "./deeps";

function setConfig() {
  return dataConfig = getAjax('/public/data/config.json', {v: new Date().getTime()}, {msg: '获取配置信息出错：', urlType: 'origin', isNotGetUser: true})
}
export function getConfig(key) {
  setPageTemp(dataConfig, setConfig)
  return key ? dataConfig[key] : dataConfig
}
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
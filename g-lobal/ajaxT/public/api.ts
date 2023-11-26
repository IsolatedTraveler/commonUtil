import { setPageTemp } from "../../base"
import { dataConfig, setDataConfig } from "../var"

export function getConfig(key: string = '') {
  setPageTemp(dataConfig, setConfig)
  return key ? dataConfig[key] : dataConfig
}
function setConfig() {
  return setDataConfig(that.getAjax('/public/data/config.json', { v: new Date().getTime() }, { msg: '获取配置信息出错：', urlType: 'origin', isNotGetUser: true }))
}
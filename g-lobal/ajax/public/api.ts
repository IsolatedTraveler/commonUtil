import { dataConfig } from "../var"
import { setDataConfig } from "../var/global"
import { setPageTemp } from '../../temp/tempData'

export function getConfig(key: string = '') {
  setPageTemp(dataConfig, setConfig)
  return key ? dataConfig[key] : dataConfig
}
function setConfig() {
  return setDataConfig(GLOBAL$AJAX$.getAjax('/public/data/config.json', { v: new Date().getTime() }, { msg: '获取配置信息出错：', urlType: 'origin', isNotGetUser: true }))
}
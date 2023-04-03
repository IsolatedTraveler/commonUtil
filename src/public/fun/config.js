import { dataConfig } from "../../var/ajax";
import { getAjax } from "./ajax";
import { setPageTemp } from "./deeps";

function setConfig() {
  return dataConfig = getAjax('/public/data/config.json', {v: new Date().getTime()}, {msg: '获取配置信息出错：', urlType: 'origin', isNotGetUser: true})
}
export function getConfig(key) {
  setPageTemp(dataConfig, setConfig)
  return key ? dataConfig[key] : dataConfig
}
export default {
  getConfig
}
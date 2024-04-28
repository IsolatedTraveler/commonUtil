import { getConfig, getMainUrl, setPageTemp } from "../../../../views/g-lobal";
import { urlServer } from "../../../../views/g-lobal/allVar";
import { setUrlServerVal } from "../../../../views/g-lobal/url/var/global";

// 获取已设置的服务端URL，若未设置则初始化。
export function obtainServiceEndpoint() {
  return setPageTemp(urlServer, setServiceUrl)
}

function setServiceUrl() {
  return setUrlServerVal(getMainUrl(getConfig().magicServer))
}
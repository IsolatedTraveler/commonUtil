import { setPageTemp } from "../../../../views/g-lobal";
import { urlBase } from "../../../../views/g-lobal/allVar";
import { seturlBaseVal } from "../../../../views/g-lobal/url/var/global";
import { urlRegV } from "../../../../views/types";

// 分析当前页面URL，确定应用的基础URL。
export function determineApplicationBaseUrl() {
  return setPageTemp(urlBase, setBaseUrl)
}

function setBaseUrl() {
  let url = window.location.href
  seturlBaseVal((url.split(urlRegV)[0] + '/').replace(/\/+/g, '/'))
  return urlBase
}
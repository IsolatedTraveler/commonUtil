import { setPageTemp } from "../../../../views/g-lobal";
import { appBaseUrl, setAppBaseUrl } from "../var";

// 分析当前页面URL，确定应用的基础URL。
export function getAppBaseUrl() {
  return setPageTemp(appBaseUrl, setAppBaseUrl)
}
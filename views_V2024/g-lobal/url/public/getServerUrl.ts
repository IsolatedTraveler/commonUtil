import { setPageTemp } from "../../../../views/g-lobal";
import { serverUrl, setServerUrl } from "../var";

// 获取已设置的服务端URL，若未设置则初始化。
export function getServerUrl() {
  return setPageTemp(serverUrl, setServerUrl)
}

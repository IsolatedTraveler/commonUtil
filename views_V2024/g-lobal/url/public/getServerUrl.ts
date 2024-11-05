import { newServerUrl, serverUrl, setNewServerUrl, setServerUrl } from "../../common/system/server";
import { setPageTemp } from "../../util/public/setPageTemp";

/**
 * @description 获取服务端URL。如果尚未设置，此函数会触发服务端URL的初始化过程。
 * @returns {string} 当前设置的服务端URL。
 */
export function getServerUrl(): string {
  return setPageTemp(serverUrl, setServerUrl)
}
export function getNewServerUrl(): string {
  return setPageTemp(newServerUrl, setNewServerUrl);
}

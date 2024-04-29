import { setPageTemp } from "../../util/public/setPageTemp";
import { appBaseUrl, setAppBaseUrl } from "../var";
/**
 * @description 获取当前设置的应用程序基础URL。如果尚未设置，此函数会触发应用程序基础URL的初始化过程。
 * @returns {string} 应用程序的基础URL。
 */
export function getAppBaseUrl(): string {
  return setPageTemp(appBaseUrl, setAppBaseUrl)
}
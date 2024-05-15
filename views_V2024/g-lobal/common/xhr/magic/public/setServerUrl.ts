import { getConfig } from "../../../system";
import { extractPrimaryUrl } from "../../../../url/fun";

/**
 *  @description 设置服务端URL。此函数从应用程序配置中提取主要的服务端URL。
 * 首先通过`getConfig()`获取配置信息，然后从配置的`magicServer`属性中提取主要URL。
 * @returns {string} 设置后的服务端URL。
 */
export function setServerUrl(): string {
  // return GLOBAL$COMMON$.serverUrl = extractPrimaryUrl(getConfig().magicServer)
  return 'http://192.168.0.242:8080/jtphis/'
}

import { UrlType } from "../../type";
import { getAppBaseUrl } from "./getAppBaseUrl";
import { getServerUrl } from "./getServerUrl";
/**
 * 构建一个绝对URL。
 * 
 * @param {string} targetUrl - 要转换为绝对URL的目标相对路径或已存在的URL。
 * @param {UrlType} [urlType] - 指定URL类型的枚举值。可能的值为 'origin', 'local' 或未定义。
 *        - 'origin': 使用应用程序的基本URL。
 *        - 'local': 使用当前页面的URL。
 *        - 未定义或其它值: 使用服务器URL。
 * 
 * @returns {string} 完整的绝对URL。
 */
export function buildAbsoluteUrl(targetUrl: string, urlType?: UrlType): string {
  let baseUrl;
  switch (urlType) {
    case 'origin':
      baseUrl = getAppBaseUrl();
      break;
    case 'local':
      baseUrl = location.href;
      break;
    default:
      baseUrl = getServerUrl();
      break;
  }
  return new URL(targetUrl, baseUrl).href;
}
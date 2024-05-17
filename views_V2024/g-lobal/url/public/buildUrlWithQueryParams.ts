import { appendParamsToUrl } from "../fun";
import { convertObjectToQueryString } from "./convertObjectToQueryString";
/**
 * @description 根据传入的对象和可选的URL基础，生成包含查询参数的完整URL。
 *
 * 如果提供了URL（字符串或URL对象），该函数会将对象转换的查询参数追加到该URL。
 * 否则，它将仅使用对象生成查询字符串。
 *
 * @param {any} obj - 要转换为查询参数的对象。
 * @param {string | URL} [url=''] - 基础URL，可以是字符串或URL实例，默认为空字符串。
 * @returns {string} 完整的URL字符串，包含追加的查询参数。
 */
export function buildUrlWithQueryParams(obj: any, url: string | URL = ''): string {
  return obj ? (url ? appendParamsToUrl(obj, url) : convertObjectToQueryString(obj)) : String(url)
}

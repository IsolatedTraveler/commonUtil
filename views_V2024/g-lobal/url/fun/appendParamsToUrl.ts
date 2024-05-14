import { encodeUrlParamValue } from "./encodeUrlParamValue";

/**
 * @description 将对象中的参数追加到给定URL的查询字符串中。
 *
 * @param {any} obj - 包含查询参数的对象。
 * @param {string | URL} url - 要追加查询参数的URL基础，可以是字符串或URL实例。
 * @returns {string} 更新后的URL字符串，包含原有的和新追加的查询参数。
 */
export function appendParamsToUrl(obj: any, url: string | URL) {
  const baseUrl = new URL(url);
  const searchParams = new URLSearchParams(baseUrl.search);
  Object.entries(obj).forEach(([key, value]) => {
    if (!(value === undefined || value === null))
      searchParams.set(key, encodeUrlParamValue(value));
  })
  baseUrl.search = searchParams.toString();
  return baseUrl.toString();
}
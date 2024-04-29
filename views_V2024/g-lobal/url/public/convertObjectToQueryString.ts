import { encodeUrlParamValue } from "../fun";

/**
 * @description 将一个对象转换为URL查询字符串。
 * 此函数接收一个对象，其中的每个键值对将转换为形如`key=value`的字符串，
 * 所有键值对通过`&`连接，构成URL的查询字符串部分。
 *
 * @param {Object} obj - 需要转换的对象，键值对的值可以是基本类型或可被JSON化的对象。
 * @returns {string} 返回生成的URL查询字符串。
 */
export function convertObjectToQueryString(obj: any): string {
  return Object.entries(obj).map(([key, value]) => {
    return `${key}=${encodeUrlParamValue(value)}`;
  }).join('&');
}
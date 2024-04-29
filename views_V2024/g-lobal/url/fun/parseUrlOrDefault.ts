/**
 * @description 尝试解析并返回有效的URL对象，或者默认返回当前页面位置。
 * @param {URL|Location|string} url - 需要解析的URL输入。
 * @return {URL|Location} 解析后的URL对象，或当前页面的location作为备选。
 */
export function parseUrlOrDefault(url: URL | Location | string): URL | Location {
  if (url instanceof URL || url instanceof Location) return url;
  if (typeof url === 'string') {
    try {
      return new URL(url);
    } catch (error) {
      console.error('无效的URL:', url);
    }
  }
  return location;
}
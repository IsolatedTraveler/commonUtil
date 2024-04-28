// 解析URL对象，支持字符串或URL实例
export function retrieveUrl(url: URL | Location | string) {
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
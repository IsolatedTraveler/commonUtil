// // 将相对URL转换为绝对URL，依据基础URL进行处理。处理'./', '../', 和基本路径。
export function convertToAbsoluteUrl(relativeUrl: string, base?: string | URL | Location) {
  if (/^http[s]*:\/\//i.test(relativeUrl)) {
    return relativeUrl;
  }
  const baseAddress = getUrl(base);
  let pathParts = baseAddress.pathname.split('/').filter(Boolean);
  relativeUrl = relativeUrl.replace(/^\.\//, '').replace(/\/$/, ''); // 移除开头的"./"和尾部的"/"
  if (relativeUrl.startsWith('../')) {
    const levelUp = relativeUrl.split('/').filter(part => part === '..').length;
    pathParts = pathParts.slice(0, -levelUp);
    relativeUrl = relativeUrl.replace(/\.\.\//g, '');
  }
  pathParts = pathParts.concat(relativeUrl.split('/').filter(Boolean)); // 合并路径段，忽略空字符串
  return baseAddress.origin + '/' + pathParts.join('/');
}
function getUrl(relativeUrl?: string | URL | Location): URL | Location {
  if (relativeUrl instanceof URL || relativeUrl instanceof Location) {
    return relativeUrl;
  }
  if (typeof relativeUrl === 'string') {
    try {
      return new URL(relativeUrl);
    } catch (error) {
      // 如果字符串不是有效的URL格式，可以选择抛出错误或默认处理
      console.error('Invalid URL:', relativeUrl);
    }
  }
  return location;
}
export function dealsUrl(url = '', base?: string | URL | Location) {
  if (/^http[s]*:\/\//i.test(url)) {
    return url;
  }
  const baseUrl = getUrl(base);
  let pathSegments = baseUrl.pathname.split('/').filter(Boolean);
  url = url.replace(/^\.\//, '').replace(/\/$/, ''); // 移除开头的"./"和尾部的"/"
  if (url.startsWith('../')) {
    const levelUp = url.split('/').filter(part => part === '..').length;
    pathSegments = pathSegments.slice(0, -levelUp);
    url = url.replace(/\.\.\//g, '');
  }
  pathSegments = pathSegments.concat(url.split('/').filter(Boolean)); // 合并路径段，忽略空字符串
  return `${baseUrl.origin}/${pathSegments.join('/')}`;
}
export function getUrl(url?: string | URL | Location): URL | Location {
  if (url instanceof URL || url instanceof Location) {
    return url;
  }
  if (typeof url === 'string') {
    try {
      return new URL(url);
    } catch (error) {
      // 如果字符串不是有效的URL格式，可以选择抛出错误或默认处理
      console.error('Invalid URL:', url);
      return location;
    }
  }
  return location;
}
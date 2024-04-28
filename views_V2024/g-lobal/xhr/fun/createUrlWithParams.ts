// 根据对象生成URL查询参数字符串，或者将参数附加到现有URL上。
export function createUrlWithParams(obj: any, url: string | URL = ''): string {
  return url ? appendParamsToUrl(obj, url) : getObjToUrl(obj)
}
function appendParamsToUrl(obj: any, url: string | URL) {
  const baseUrl = new URL(url);
  const searchParams = new URLSearchParams(baseUrl.search);
  Object.entries(obj).forEach(([key, value]) => {
    searchParams.set(key, encodeUrlParamValue(value));
  })
  baseUrl.search = searchParams.toString();
  return url.toString();
}
function encodeUrlParamValue(value: any) {
  return value ? encodeURIComponent(typeof value === 'object' ? JSON.stringify(value) : value) : ''
}
function getObjToUrl(obj: any): string {
  return Object.entries(obj).map(([key, value]) => {
    return `${key}=${encodeUrlParamValue(value)}`;
  }).join('&');
}
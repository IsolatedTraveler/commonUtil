import { getUrl } from "./concat";


export function getUrlParams(key: string | null | undefined = '', url: string | URL | Location | undefined) {
  url = getUrl(url)
  var search = decodeURIComponent(url.search).slice(1).split('&'), urlParam: any = {};
  search.forEach(function (it) {
    if (it) {
      var data = it.split('=');
      try {
        urlParam[data[0]] = decodeURIComponent(data[1]);
      } catch (e) {
        urlParam[data[0]] = data[1];
      }
    }
  });
  return key ? urlParam[key] : urlParam
}
export function getParamsUrl(obj: any, url: string | URL = ''): string {
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
export function getObjToUrl(obj: any): string {
  return Object.entries(obj).map(([key, value]) => {
    return `${key}=${encodeUrlParamValue(value)}`;
  }).join('&');
}
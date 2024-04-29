import { getUrl } from "../fun/getUrl";

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
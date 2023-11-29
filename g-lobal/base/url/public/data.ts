

export function getUrlParams(key: string | null | undefined = '', url: string | URL | Location | undefined) {
  if (url) {
    if (typeof url === 'string') {
      url = new URL(url)
    }
  } else {
    url = location
  }
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
  if (url) {
    url = new URL(url);
    obj = Object.assign(getUrlParams(null, url), obj);
    url = url.origin + url.pathname;
  } else {
    url = url || '';
  }
  let keys = Object.keys(obj);
  if (keys.length) {
    url += '?' + keys.map(key => {
      let v = obj[key];
      v = (v === null || v === undefined) ? '' : v;
      return key + '=' + encodeURIComponent(typeof v === 'object' ? JSON.stringify(v) : v)
    }).join('&');
  }
  return url
}
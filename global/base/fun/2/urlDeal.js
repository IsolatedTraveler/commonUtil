import { urlBase } from "../../var/url";
import { setPageTemp } from "../1/pageTemp";
import { that, urlRegV } from "../../var/init";
export function setBaseUrl() {
  let name = that.val('webName') || '', reg, url = w.location.href, matchArr;
  if (name) {
    reg = new RegExp(urlRegV + '|' + name);
  } else {
    reg = new RegExp(urlRegV);
  }
  urlBase = url.split(reg)[0];
  matchArr = url.match(reg);
  if (matchArr && matchArr[0] == name) {
    urlBase = urlBase + name;
  }
  urlBase = (urlBase + '/').replace(/\/+/g, '/');
  return urlBase
}
export function getBaseUrl() {
  return setPageTemp(urlBase, setBaseUrl)
}
export function dealsUrl(url = '', base) {
  if (!/^http[s]*:\/\//.test(url)) {
    base = base ? new URL(base) : location;
    let path = base.pathname.split('/');
    if (/^\.\//.test(url)) {
      path.pop();
      path.push(url.replace('./', ''));
    } else if (/^..\//.test(url)) {
      let v = url.split('/'), len = v.filter(it => it === '..').length;
      path.splice(-(len + 1));
      path.push(...v.splice(len));
    } else {
      path.push(url.replace(/^\/|\/$/g, ''));
    }
    return base.origin + '/' + path.filter(it => it).join('/')
  }
  return url
}
export function getAllUrl(url, lx) {
  if (/^http/.test(url)) {
    return url
  } else if (lx === 'origin') {
    return dealsUrl(url, getBaseUrl())
  } else {
    return dealsUrl(url, that.getServiceUrl())
  }
}
export function getUrlParams(key, url) {
  url = url || location;
  var search = decodeURIComponent(url.search).slice(1).split('&'), urlParam = {};
  search.forEach(function(it) {
    if (it) {
      it = it.split('=');
      try {
        urlParam[it[0]] = decodeURIComponent(it[1]);
      } catch (e) {
        urlParam[it[0]] = it[1];
      }
    }
  });
  return key ? urlParam[key] : urlParam
}
export function getParamsUrl(obj, url){
  if (url) {
    url = new URL(url);
    obj = Object.assign(getUrlParams(null, url),obj);
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
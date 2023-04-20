import { urlFace, urlImg, urlUpload, urlBase, urlHost, urlTp } from '../../var/url'
import { val } from './init'
import { setPageTemp } from './deeps'
import { that, urlRegV } from '../../var/init'
function setBaseUrl() {
  let name = val('webName'), reg, url = w.location.href, matchArr
  if (name) {
    reg = new RegExp(urlRegV + '|' + name)
  } else {
    reg = new RegExp(urlRegV)
  }
  urlBase = url.split(reg)[0]
  matchArr = url.match(reg)
  if (matchArr && matchArr[0] == name) {
    urlBase = urlBase + name
  }
  urlBase = (urlBase + '/').replace(/\/+/g, '/')
  return urlBase
}
function setHostUrl() {
  let name = val('hostName')
  return urlHost = name ? (dealsUrl(name, getBaseUrl()) + '/') : getBaseUrl()
}
function getPath() {
  var sc = d.scripts, len = sc.length - 1, i = 0
  for (; i < len; i++) {
    if (sc[i].readyState === 'interactive') {
      return sc[i].src
    }
  }
  return sc[i].src
}
function setTpUrl() {
  urlTp = getBaseUrl()
  return urlTp = urlTp.indexOf('127.0.0.1') !== -1 ? (val('imgUrl') || urlTp) : urlTp
}
function setImgUrl() {
  return urlImg = dealsUrl('rest/downLoadFileById/', that.getServiceUrl())
}
function setFaceUrl() {
  return urlFace = dealsUrl('/rest/facedetect', that.getConfig('faceurl') || that.getServiceUrl())
}
function setUploadUrl() {
  return urlUpload = that.getConfig('url_common_file')
}
export function dealsUrl(url = '', base) {
  if (!/^http[s]*:\/\//.test(url)) {
    base = base ? new URL(base) : location
    let path = base.pathname.split('/')
    if (/^\.\//.test(url)) {
      path.pop()
      path.push(url.replace('./', ''))
    } else if (/^..\//.test(url)) {
      let v = url.split('/'), len = v.filter(it => it === '..').length
      path.splice(-(len + 1))
      path.push(...v.splice(len))
    } else {
      path.push(url.replace(/^\/|\/$/g, ''));
    }
    return base.origin + '/' + path.filter(it => it).join('/')
  }
  return url
}
export function getBaseUrl() {
  return setPageTemp(urlBase, setBaseUrl)
}
export function getHostUrl() {
  return setPageTemp(urlHost, setHostUrl)
}
export function getJsUrl(d) {
  return d.currentScript ? (d.currentScript.src || getPath(d)) : getPath(d)
}
export function getTpUrl(url = '') {
  return dealsUrl(url, setPageTemp(urlTp, setTpUrl))
}
export function getFaceUrl() {
  return setPageTemp(urlFace, setFaceUrl)
}
export function getImgUrl(id) {
  return dealsUrl(id, setPageTemp(urlImg, setImgUrl))
}
export function getUploadUrl() {
  return setPageTemp(urlUpload, setUploadUrl)
}
export default {
  dealsUrl,
  getBaseUrl,
  getHostUrl,
  getJsUrl,
  getTpUrl,
  getFaceUrl,
  getImgUrl,
  getUploadUrl
}
import { urlFace, urlImg, urlUpload, urlHost, urlTp } from '../../../../global/base/var/url'
import { val } from './init'
import { setPageTemp } from './deeps'
import { that } from '../../var/init'
import { dealsUrl, getBaseUrl } from '../../../../global/ajax/fun/2/urlDeal'
export { dealsUrl, getBaseUrl } from '../../../../global/ajax/fun/2/urlDeal'
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
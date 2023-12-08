/* eslint-disable no-undef */
import { val } from './init'
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
export default {
  dealsUrl,
  getBaseUrl,
  getJsUrl,
  getTpUrl,
  getFaceUrl,
  getImgUrl
}
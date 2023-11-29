/* eslint-disable no-unused-vars */
import { webName } from "../../../../g-lobal/var"
import { getParamsUrl, getUrlParams, setWebName } from "../../../../g-lobal/"
export { getParamsUrl, getUrlParams } from "../../../../g-lobal/"
import assign from "../../extend/assign"
import { initPop, webNameReg, BASE64, loadElem, promiseResove, msgElem, loadMsg, closeLoadEd, promiseCore, jse } from "../../var/init"
import { debounce1, uuid } from "./base"
import { setPageTemp, tempData } from "./deeps"
function closeLoad() {
  if (loadMsg.msgs.length < 2) {
    loadElem.setAttribute('style', 'display: none')
  }
}
export function setLoadElem() {
  loadElem = d.createElement('div')
  loadElem.setAttribute('class', 'jt-load jt-flex jt-abs')
  loadElem.setAttribute('center', true)
  loadElem.setAttribute('style', 'display: none')
  loadElem.innerHTML = '<p class="jt-loading"><span></span><span></span><span></span><span></span><span></span><span></span></p>'
  msgElem = d.createElement('p')
  loadElem.append(msgElem)
  loadMsg = { msgs: [] }
  closeLoadEd = debounce1(closeLoad, 10)
  d.body.append(loadElem)
}
export function val(name, value) {
  if (value === undefined) {
    return initPop[name]
  } else {
    initPop[name] = value
  }
}
export function loading(msg) {
  if (d.body) {
    let id = uuid()
    setPageTemp(loadElem, setLoadElem)
    msg && (msgElem.innerHTML = msg)
    loadMsg[id] = msg
    if (loadMsg.msgs.length < 2) {
      loadElem.setAttribute('style', '')
    }
    loadMsg.msgs = Object.keys(loadMsg)
    return id
  }
}
export function loaded(i) {
  if (loadMsg) {
    delete loadMsg[i]
    loadMsg.msgs = Object.keys(loadMsg)
    closeLoadEd()
  }
}
export function alertMsg(msg, judge = true) {
  judge && layui.layer.alert(msg)
}
export function strToUrl(str, type) {
  return URL.createObjectURL(new Blob([str], { type }))
}
export function config(obj = {}) {
  Object.assign(initPop, obj)
  setWebName()
  webNameReg = new RegExp('^' + webName + '-')
  val('webNameReg', webNameReg)
}
export function initConfig(obj = {}) {
  layui.assign = assign
  config()
  return init()
}
export function init() {
  let pro = [], i = that.loading()
  if (initPop.isPwd) {
    pro.push(that.loadPwdJs())
  }
  if (initPop.isBase64) {
    pro.push(that.use([{ src: './encryption/BASE64.js' }]).then(e => {
      BASE64 = new Base64()
    }))
  }
  if (initPop.isMd5) {
    pro.push(that.use([{ src: './encryption/md5.js' }]))
  }
  if (promiseCore) {
    promiseResove = promiseCore.then(e => {
      return Promise.all(pro).then(e => {
        that.loaded(i)
      })
    })
  } else {
    promiseResove = Promise.all(pro).then(e => {
      that.loaded(i)
    })
  }
  return promiseResove
}
export function formatTreeData(data, id = 'id', pid = 'sjid', key = '') {
  var result = [], map = { '_formatTreeData': data };
  [].forEach.call(data, function (it) {
    map[key + it[id]] = it
  });
  [].forEach.call(data, function (it) {
    var p = map[key + it[pid]]
    if (p) {
      p.children ? p.children.push(it) : p.children = [it]
      p.jtchild ? p.jtchild.push(it) : p.jtchild = [it]
    } else {
      result.push(it)
    }
  })
  result.__proto__ = map
  return result
}
export function local(name, val) {
  return tempData(name, val, localStorage)
}
export function getBase64() {
  return BASE64
}
export function getJse() {
  return jse
}
export default {
  getParamsUrl: getParamsUrl,
  getUrlParams: getUrlParams,
  loading,
  loaded,
  alertMsg,
  strToUrl,
  val,
  config,
  init,
  initConfig,
  formatTreeData,
  setLoadElem,
  local,
  getBase64,
  getJse
}
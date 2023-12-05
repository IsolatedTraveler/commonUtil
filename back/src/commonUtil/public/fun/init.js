/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import assign from "../../extend/assign"
import { initPop, webNameReg, BASE64, promiseResove, promiseCore, jse } from "../../var/init"

export function val(name, value) {
  if (value === undefined) {
    return initPop[name]
  } else {
    initPop[name] = value
  }
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
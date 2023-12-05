/* eslint-disable no-undef */
import { thirdBaseUrl, useHead, useSrcModule, useModule } from "../../var/use"
import { val } from "./init"
import { syncWhile, ElemLoadEvent } from "./deeps"
function setThirdBaseUrl() {
  useHead = d.getElementsByTagName('head')[0]
  thirdBaseUrl = val('thirdBaseUrl')
}
function useLoading(param) {
  let src = param.src, node = d.createElement('script')
  useSrcModule[src] = { code: '0' }
  return new Promise((resolve, reject) => {
    node.async = true
    node.charset = 'utf-8'
    node.src = src + '?version=' + (that.version || new Date().getTime())
    useHead.appendChild(node)
    ElemLoadEvent(node, resolve)
  }).then(e => {
    if (e.code === '-1') {
      e.code = '1'
      e.msg = src + ' 加载失败'
    }
    useSrcModule[src] = e
    useHead.removeChild(node)
  })
}
function useLoadJudge(param) {
  return useSrcModule[param.src]
}
function useUrlLoadMods(callBack) {
  callBack.call(that, function (n, v) {
    useModule[n] = v
  })
}
export function use(arr, callBack) {
  setPageTemp(thirdBaseUrl, setThirdBaseUrl)
  if (!Array.isArray(arr)) {
    arr = [arr]
  }
  arr = arr.map(it => {
    return syncWhile(useLoadJudge, useLoading, { src: dealsUrl(typeof it === 'string' ? it + '.js' : it.src, thirdBaseUrl) })
  })
  if (callBack) {
    return Promise.all(arr).then(callBack)
  } else {
    return Promise.all(arr)
  }
}
export function define(deeps, callBack) {
  if (typeof deeps === 'function') {
    useUrlLoadMods(deeps)
  } else {
    use(deeps, function () {
      useUrlLoadMods(callBack)
    })
  }
}
export default {
  use,
  define
}
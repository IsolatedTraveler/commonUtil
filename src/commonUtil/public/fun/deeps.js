import { webName } from "../../var/init";
import { setPageTemp } from "../../../../g-lobal/base/fun/1/pageTemp"
export { setPageTemp } from "../../../../g-lobal/base/fun/1/pageTemp"

function elemLoaded(e, resolve, reject) {
  var readyRegExp = navigator.platform === 'PLaySTATION 3' ? /^complete$/ : /^(complete|loaded)$/;
  if (e.type === 'load' || (readyRegExp.test((e.currentTarget || e.srcElement).readyState))) {
    resolve({ code: '1', w: this.contentWindow, elem: this })
  } else {
    reject({ code: '-1', w: this.contentWindow, elem: this })
  }
}
export function syncWhile(judgeFun, callBack, param, timeOut = 10, total = 20, i = 0) {
  if (i > total) {
    return Promise.reject()
  } else {
    let judge = judgeFun(param)
    if (judge) {
      let code = judge.code
      if (code === '1') {
        if (judge.msg) {
          console.error(judge.msg)
        }
        return Promise.resolve()
      } else if (code === '0') {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve()
          }, timeOut)
        }).then(e => {
          return syncWhile(judgeFun, callBack, param, timeOut, total, ++i)
        })
      } else {
        return Promise.reject(judge)
      }
    } else {
      return callBack(param)
    }
  }
}
export function ElemLoadEvent(node, resolve, reject) {
  reject = reject || resolve
  $(node).on('load', function (e) {
    elemLoaded.call(this, e, resolve, reject);
  })
}
export function setIframe(url, timeOut, resolve, reject) {
  let elem = d.createElement('iframe')
  elem.setAttribute('style', 'display: none')
  elem.src = url
  d.body.appendChild(elem)
  ElemLoadEvent(elem, function (e) {
    if (timeOut != '-1') {
      setTimeout(() => {
        d.body.removeChild(elem)
      }, timeOut);
    }
    resolve && resolve(e, function () {
      d.body.removeChild(elem)
    })
  }, function (e) {
    d.body.removeChild(elem)
    reject && reject(e)
  })
}
export function tempData(name, val, obj = sessionStorage) {
  let name1 = webName + name
  if (val === undefined) {
    return JSON.parse(obj.getItem(name1)) || JSON.parse(obj.getItem(name))
  } else if (val === null) {
    obj.removeItem(name1)
  } else {
    obj.setItem(name1, JSON.stringify(val))
  }
}
export default {
  setPageTemp,
  syncWhile,
  ElemLoadEvent,
  setIframe
}
// eslint-disable-next-line no-unused-vars
import { initPop, that, promiseResove, promiseCore } from "./var/init"
import {dealsUrl, getBaseUrl, getJsUrl} from './public/fun/url'
import {required, identity} from './public/fun/check'
import { getName } from "./public/business/login"
initPop.thirdBaseUrl = dealsUrl('./modules', getJsUrl(d))
function setFormVerify() {
  layui.form.verify({
    required,
    identity
  })
}
function reWriteLayuiUse() {
  if (!layui.use1) {
    layui.use1 = layui.use
    layui.use = function(a, b) {
      layui.use1(a, function() {
        if (layui.form) {
          setFormVerify()
        }
        if (b) {
          if (promiseResove) {
            promiseResove.then(b)
          } else {
            b()
          }
        }
      })
    }
  }
}
function getLayUi() {
  if (w.layui) {
    layui.config({
      base: that.dealsUrl('.' + (initPop.libSite || '/lib') + '/js/layui-v2.5.7/extend', getBaseUrl()) + '/' // 三方扩展插件路径
    });
    layui.use('layer')
    reWriteLayuiUse()
    return Promise.resolve()
  } else {
    return that.use([{src: 'layui-v2.5.7/layui.js'}]).then(res => {
      return getLayUi()
    })
  }
}
const Class = function(obj) {
  let pro = []
  that = this
  that.config(obj)
  w.name = getName(w)
  pro = [getLayUi()]
  if (w.jthisJsObject || w.wdphisJsObject) {
    const systemV = (w.jthisJsObject || w.wdphisJsObject), system = systemV.jthis || systemV.wdphis
    that.getUser = function() {
      // eslint-disable-next-line no-unused-vars
      return JSON.parse(system.varget('0', 'ryxx'))
    }
    pro.push(that.use('browser'))
  }
  // eslint-disable-next-line no-unused-vars
  promiseCore = Promise.all(pro)
  that.init()
}
export default Class
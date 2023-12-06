/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import { initPop, promiseResove, promiseCore } from "./var/init"
import { required, identity } from './public/fun/check'
import { getName } from "./public/business/login"
import { getJsUrl } from "./public/fun/url"
initPop.thirdBaseUrl = dealsUrl('./modules', getJsUrl(d))
function setFormVerify() {
  w.layui.form.verify({
    required,
    identity
  })
}
function reWriteLayuiUse() {
  if (!w.layui.use1) {
    w.layui.use1 = w.layui.use
    w.layui.use = function (a, b) {
      w.layui.use1(a, function () {
        if (w.layui.form) {
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
    w.layui.config({
      base: that.dealsUrl('.' + (initPop.libSite || '/lib') + '/js/layui-v2.5.7/extend', getBaseUrl()) + '/' // 三方扩展插件路径
    });
    w.layui.use('layer')
    reWriteLayuiUse()
    return Promise.resolve()
  } else {
    return that.use([{ src: 'layui-v2.5.7/w.layui.js' }]).then(res => {
      return getLayUi()
    })
  }
}
export const Class = function (this: any, obj: any) {
  let pro = []
  that = this
  that.config(obj)
  w.name = getName(w)
  pro = [getLayUi()]
  // eslint-disable-next-line no-unused-vars
  promiseCore = Promise.all(pro)
  that.init()
}
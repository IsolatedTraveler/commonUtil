
export function srcBaseBaseFunError() {
  layui.layer.msg('该方法依赖专有浏览器，请在专有浏览器中使用')
}
export function srcBaseBaseFunErrorSync() {
  srcBaseBaseFunError()
  return Promise.reject()
}
export function getBrowserParam(mkbh, name) {
  return setBrowserParam(mkbh, name)
}
export function setBrowserParam(mkbh, name, value) {
  return that.session('bro-' + mkbh + '-' + name, value)
}
export default {
  srcBaseBaseFunError,
  srcBaseBaseFunErrorSync,
  getBrowserParam,
  setBrowserParam
}
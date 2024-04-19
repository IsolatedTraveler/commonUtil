
export function srcBaseBaseFunError() {
  layui.layer.msg('该方法依赖专有浏览器，请在专有浏览器中使用', 'lib23/commonUtil')
}
export function srcBaseBaseFunErrorSync() {
  srcBaseBaseFunError()
  return Promise.reject()
}
export default {
  srcBaseBaseFunError,
  srcBaseBaseFunErrorSync
}
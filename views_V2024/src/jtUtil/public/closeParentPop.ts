/**
 * @description 关闭父窗口中的弹出层或对话框。
 * 此函数假定父窗口中存在一个名为 jtUtil 的对象，并且该对象包含一个 closeFun 方法，
 * 用于执行关闭操作。主要用于iframe或弹出窗口场景下的跨窗口控制。
 * 
 * @returns {void}
 */
export function closeParentPop() {
  if (w.parent.jtUtil && w.parent.jtUtil.closeFun)
    w.parent.jtUtil.closeFun()
  else {
    // 记录jtUtil未定义或父窗口不存在的日志，用于调试
    console.warn('closeParentPop: parent window or jtUtil or closeFun is not defined.');
  }
}
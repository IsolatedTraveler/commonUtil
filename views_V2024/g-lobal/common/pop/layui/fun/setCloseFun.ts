/**
 * @description 设置关闭窗口的回调函数，并可模拟点击指定按钮。多数情况和closeParentPop方法结合使用
 * 
 * 当需要在弹出层关闭时执行特定操作或响应特定按钮的点击时，此函数会定义一个关闭回调函数，
 * 并根据传入的参数决定是否立即模拟点击弹出层中的某个按钮。
 *
 * @param {number} i - 需要关闭的layer弹窗的索引。
 * @param {any} w - 弹出层内容所在的window对象，如果存在则尝试模拟点击按钮。
 * @param {Function} resolve - Promise的resolve函数，用于在关闭弹窗后传递数据，通常是按钮的索引。
 * @param {number} [btn=1] - 默认模拟点击的按钮序号，按钮序号从1开始计数。
 */
export function setCloseFun(i: number, w: any, resolve: any, btn = 1) {
  that.closeFun = () => {
    window.layer.close(i)
    resolve(btn)
  }
  if (w && w.$) {
    w.$('#layerBtn .btn').eq(btn - 1).click();
  }
}
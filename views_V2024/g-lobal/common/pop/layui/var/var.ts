export var closeFun: undefined | (() => void)
/**
 * 设置关闭弹出层的功能函数。
 * 此函数用于在父页面点击按钮后，触发子页面中对应的按钮点击事件，并在子页面事件执行完毕后，
 * 通过调用父页面的特定方法来关闭弹出层。使用了iframe进行页面间的通信与交互。
 *
 * @param {number} i - 弹出层的索引，用于关闭指定的layer弹出层。
 * @param {any} w - 子页面的window对象，用于访问子页面的DOM和方法。
 * @param {any} resolve - Promise的resolve函数，用于在操作完成后传递结果给父页面。
 * @param {number} [btn=1] - 子页面中要触发点击事件的按钮序号，默认为第1个按钮。
 */
export function setCloseFun(i: number, w: any, resolve: any, btn = 1) {
  // 将关闭弹出层的方法绑定到父页面的特定模块上，以便后续调用
  that.closeFun = closeFun = () => {
    // 调用layer的close方法，传入弹出层的索引i以关闭它
    window.layer.close(i);
    // 通过resolve传递按钮序号给父页面的Promise处理程序
    resolve(btn);
    // 清除closeFun引用，避免内存泄漏
    closeFun = undefined;
  };

  // 检查子页面window对象存在且jQuery ($) 函数可用
  if (w && w.$) {
    // 在子页面中根据btn参数找到对应的按钮并模拟点击事件
    w.$('#layerBtn .btn').eq(btn - 1).click();
  }
  return false
}
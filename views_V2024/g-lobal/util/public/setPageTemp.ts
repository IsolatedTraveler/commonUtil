/**
 * @description 设置临时页面数据或通过回调函数计算数据。
 * 函数的核心逻辑是：检查`val`是否已提供且有效；如果未提供，则通过调用`callBack`函数并传入
 * `param`来动态获取数据。这种方式允许在数据可能已知或需要按需计算的场景下灵活运用。
 *
 * @param {any} val - 期望设置的值，可以是任意类型
 * @param {Function} callBack - 一个函数类型的参数，当`val`未提供或无效时会被调用。此回调应当返回一个值，用于替代`val`。回调函数接收一个参数`param`。
 * @param {any} [param=undefined] - 可选参数，用于传递给`callBack`函数。默认值为`undefined`，可根据需要指定。
 * @returns {any} - 返回最终设置的值，无论是直接提供的`val`还是通过回调函数计算得到的值。
 */
export function setPageTemp(val: any, callBack: Function, param: any = undefined) {
  return val ? val : callBack(param)
}
/**
 * @description 该函数用于处理元素加载状态的异步回调。
 * 它接收三个参数，用来响应元素加载成功或失败的情况，并与Promise的解决或拒绝机制相结合。
 * 
 * @param {any} e - 事件对象，该参数包含了关于触发此函数的事件详细信息，特别是事件的类型（如'load'或'error'）。
 * @param {Function} resolve - 此参数是一个函数，属于Promise对象的解决方法。当元素成功加载时调用此函数，
 *                            通知异步操作已成功完成，可以继续执行后续的链式操作。
 * @param {Function} reject - 同样作为Promise对象的一部分，此函数用于处理失败情况。当元素加载失败或遇到其他错误时调用，
 *                            标志着异步操作未能成功完成，可引发后续的错误处理逻辑。
*/
export function elemLoaded(e: any, resolve: Function, reject: Function) {
  if (e.type === 'load') {
    resolve()
  } else {
    reject()
  }
}
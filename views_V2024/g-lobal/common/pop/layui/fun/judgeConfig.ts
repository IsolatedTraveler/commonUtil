/**
 * @description 判断配置处理函数，用于关闭弹层并根据条件决定调用resolve或reject函数。
 *
 * 此函数用于处理一系列配置检查或异步任务的完成情况。当所有任务完成（即索引`j`等于总数量`len`），
 * 表示所有配置检查未通过或任务失败，将调用`reject`函数；反之，若还有剩余任务（`j`小于`len`），
 * 表示至少有一个配置成功或任务还在进行中，此时调用`resolve`函数，并传递当前成功的任务索引`j`。
 *
 * @param {number} layerIndex - 需要关闭的layer弹窗的标识或索引。
 * @param {number} btnIndex - 点击的第几个按钮。
 * @param {number} btnLen - 总共按钮个数。
 * @param {Function} resolve - Promise解决函数，当还有未完成的任务时被调用。
 * @param {Function} reject - Promise拒绝函数，当所有任务都已完成或失败时被调用。
 * @returns {boolean} - 始终返回`false`，表示函数执行完毕且无其他值需要关注。
 */
export function judgeConfig(layerIndex: number, btnIndex: number, btnLen: number, resolve: Function, reject: Function) {
  if (window.layer)
    window.layer.close(layerIndex)
  if (btnLen == btnIndex) {
    reject()
  } else {
    resolve(btnIndex)
  }
  return false
}
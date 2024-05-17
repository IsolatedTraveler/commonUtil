import { judgeConfig } from "../fun/judgeConfig"
/**
 * @description 显示确认消息框并根据用户选择返回Promise结果。
 *
 * 此函数用于弹出一个确认消息框，包含自定义的消息、按钮文字以及标题。
 * 根据用户点击的不同按钮，通过Promise异步地返回相应的处理结果。
 * 支持最多6个自定义按钮，超出的按钮将不被处理。
 *
 * @param {string} msg - 弹窗中显示的消息内容。
 * @param {Array<string>} [btn=['确定', '取消']] - 按钮的文字数组，默认包含两个按钮：“确定”和“取消”。
 * @param {string} [title='提示'] - 弹窗的标题。
 * @returns {Promise<any>} - 返回一个Promise，根据用户点击的按钮调用resolve或reject。
 */
export function confirmMsg(msg: string, btn: Array<string> = ['确定', '取消'], title: string = '提示') {
  return new Promise((resolve, reject) => {
    if (window.layer) {
      var len = btn.length, judge = true
      window.layer.confirm(msg, {
        title,
        btn,
        btn3(i: string) {
          judge = judgeConfig(i, 3, len, resolve, reject)
        },
        btn4(i: string) {
          judge = judgeConfig(i, 4, len, resolve, reject)
        },
        btn5(i: string) {
          judge = judgeConfig(i, 5, len, resolve, reject)
        },
        btn6(i: string) {
          judge = judgeConfig(i, 6, len, resolve, reject)
        },
        end() {
          judge && reject()
          judge = false
        }
      }, function (i: string) {
        judge = judgeConfig(i, 1, len, resolve, reject)
      }, function (i: string) {
        judge = judgeConfig(i, 2, len, resolve, reject)
      })
    } else {
      window.alert('未提供弹出层解决方案：' + msg)
      reject('未提供弹出层解决方案：' + msg)
    }
  })
}
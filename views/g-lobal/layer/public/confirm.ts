import { openMsgBox } from "../../browser/public/openMsgBox"

function judgeConfig(i: string, j: number, len: number, resolve: Function, reject: Function) {
  window.layer.close(i)
  if (len == j) {
    reject()
  } else {
    resolve(j)
  }
  return false
}
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
        }
      }, function (i: string) {
        judge = judgeConfig(i, 1, len, resolve, reject)
      }, function (i: string) {
        judge = judgeConfig(i, 2, len, resolve, reject)
      })
    } else {
      return openMsgBox(title, msg, [], 1).then((data => {
        if (data == '1') {
          resolve({})
        } else {
          reject()
        }
      })).catch(reject)
    }
  })
}
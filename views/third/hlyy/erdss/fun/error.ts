import { codesArr } from "../var"

export function error(res: ErdssHlyyReturn, judge = false) {
  if (res.code != 200) {
    var data = res.data
    if (data) {
      const code = data.resultCode
        , status = codesArr.filter((it) => it.code === code)[0]
      if (status) {
        if (status.extra) {
          alert('暂不处理')
          return
        } else if (status.approve) {
          return
        } else {
          return confirm(data.severity, data.summary, data.blockProblem)
        }
      }
      return
    }
    return dealError(res.code, res.msg, judge)
  } else {
    return res.data
  }
}
function dealError(code: ErdssHlyyReturnCode, msg: string, judge: boolean) {
  if ((code == 201 || code == 202) && judge) {
    return showTip(msg, '提示', 'lt', 0, 5000)
  } else {
    return showTip(msg, '错误')
  }
}
export function showTip(msg: string, title: string = '错误', offset: string = 'auto', shade = 0.3, time: number = 0) {
  return new Promise((resolve, reject) => {
    window.YytPass.layer.open({
      content: msg,
      title,
      offset,
      shade,
      time,
      btn: time ? [] : ['关闭'],
      end: resolve
    })
  })
}
export function confirm(jb: number, content: string, wt: number): Promise<void> {
  return new Promise((resolve, reject) => {
    window.YytPass.layer.open({
      title: jb == 1 ? '严重问题' : jb == 2 ? '警示问题' : '提示信息',
      content,
      btn: ['查看', '继续提交'],
      area: ['320px', '210px'],
      minHeight: '210px',
      resize: false,
      yes: function (i: number) {
        window.YytPass.showRxReview()
      },
      btn2: function (i: number) {
        window.YytPass.layer.close(i)
        if (wt > 0) {
          confirm(1, '当前处方存在' + wt + ' 个阻断问题', 0).then(resolve).catch(reject)
        } else {
          resolve()
        }
      },
      end: reject
    })
  })
}
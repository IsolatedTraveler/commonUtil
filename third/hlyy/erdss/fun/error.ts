import { codesArr } from "../var"

export function error(res: ErdssHlyyReturn) {
  if (res.code != 200) {
    var data = res.data
    if (data) {
      const code = data.resultCode
        , status = codesArr.filter((it) => it.code === code)[0]
      if (status) {
        if (status.extra) {

        } else if (status.approve) {
          showTip(status.msg)
        } else {
          return confirm(data.severity, data.summary, data.blockProblem)
        }
      }
    }
    dealError(res.code, res.msg)
  }
}
function dealError(code: ErdssHlyyReturnCode, msg: string) {
  if (code == 201) {
    showTip(msg, '提示', 'lt', 0, 5000)
  } else {
    showTip(msg, '错误')
  }
}
function showTip(msg: string, title: string = '错误', offset: string = 'auto', shade = 0.3, time: number = 0) {
  window.YytPass.layer.open({
    content: msg,
    title,
    offset,
    shade,
    time
  })
}
function confirm(jb: number, content: string, wt: number): Promise<void> {
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
        window.YytPass.layer.close(i)
        reject()
      },
      btn2: function (i: number) {
        window.YytPass.layer.close(i)
        if (wt > 0) {
          confirm(1, '当前处方存在' + wt + ' 个阻断问题', 0).then(resolve).catch(reject)
        }
        resolve()
      }
    })
  })
}
function call(i: number, callBack: Function) {
  return function (index: number, iframe: any) {
    callBack(index, iframe, i)
  }
}
interface LayerOpenCall {
  success?: Function
  cancel?: Function
  yes?: Function
  end?: Function
  last?: Function
}
export function openPage(title: string, content: string, { success, cancel, yes, end, last }: LayerOpenCall, area = ['80%', '100%'], btn = ['确认', '取消'], callBack: Function | undefined = undefined) {
  const obj: any = {}
  if (callBack) {
    let len = btn.length - 1
    for (let i = 1; i < len; i++) {
      obj['btn' + i] = call(i, callBack)
    }
    obj['btn' + len] = last
  }
  w.layer.open(Object.assign({
    type: 2,
    title,
    content,
    area,
    yes,
    cancel,
    end,
    success
  }, obj))
}
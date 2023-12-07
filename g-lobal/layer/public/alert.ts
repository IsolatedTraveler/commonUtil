export function alertMsg(msg: string, judge: boolean = true) {
  if (judge) {
    if (window.layer) {
      window.layer.alert(msg)
    } else if (msg == '该方法依赖专有浏览器，请在专有浏览器中使用') {
      alert(msg)
    } else {
      GLOBAL$BROWSER$.getSystemVal('showmsgbox', ['提示', msg])
    }
  }
}
export function alertMsg(msg: string, title: string = '提示信息', judge: boolean | string = true) {
  if (judge) {
    if (window.layer) {
      window.layer.alert(msg)
    } else if ($.messager && $.messager.alert) {
      $.messager.alert({
        title,
        msg,
        icon: 'warning'
      })
    } else if (msg == '该方法依赖专有浏览器，请在专有浏览器中使用') {
      alert(msg + (judge === 'lib23/commonUtil' ? '' : judge))
    } else {
      alert('未提供报错解决方案：' + msg)
    }
  }
}
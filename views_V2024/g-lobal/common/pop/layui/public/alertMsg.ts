/**
 * 弹出警告消息框，支持使用layer或jQuery messager两种方式。
 *
 * @param {string} msg - 警告消息内容。
 * @param {string} [title='提示信息'] - 警告框的标题，默认为'提示信息'。
 */
export function alertMsg(msg: any, title: string = '提示信息') {
  if (msg.message) {
    console.error(msg)
    msg = msg.message
  }
  if (window.layer) {
    window.layer.alert(msg)
  } else if ($.messager && $.messager.alert) {
    $.messager.alert({
      title,
      msg,
      icon: 'warning'
    })
  } else {
    alert('该方法依赖layer或jQuery messager，请引用相关依赖。\n消息内容：' + msg)
  }
}
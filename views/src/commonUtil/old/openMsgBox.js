export function openMsgBox(title, content, button, type) {
  return new Promise((resolve, reject) => {
    if (button == 0) {
      layui.layer.alert(content, { title })
      resolve(1)
    } else if (button == 1) {
      layui.layer.confirm(content, {title}, function(i) {
        resolve(1)
        layui.layer.close(i)
      })
    }
    if (type) {
      console.error('暂未实现该功能')
      resolve(1)
    }
  })
}

export function initLayui() {
  if (window.layui) {
    return new Promise((resolve, reject) => {
      window.layui.use(['layer'], resolve)
    })
  } else {
    return Promise.resolve()
  }
}
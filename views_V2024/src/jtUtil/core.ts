export const Class: any = function (this: any) {
  that = this
  if (window.layui) {
    window.layui.use(['layer'])
  }
}
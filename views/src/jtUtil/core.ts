export const Class: any = function (this: any) {
  that = this
  GLOBAL$BROWSER$.getJtPhisSystem()
  GLOBAL$COMMONUTIL$.setWebName()
  if (layui) {
    layui.use(['layer'], () => {
      console.log(123)
    })
  }
}
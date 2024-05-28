import { getConfig } from "../../g-lobal"

export const Class: any = function (this: any) {
  that = this
  getConfig()
  if (window.layui) {
    window.layui.use(['layer'])
  }
}
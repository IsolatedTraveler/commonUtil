import { winName } from "../../allVar";
import { router } from "../../router";
import { local, session } from "../../temp";
import { indexUrl } from "../var/gloabl";

export function dealLogin(res: { code: number; data: any; message: string }, data: { yhm?: any; mm: any; jzmm?: any; jzyh?: any }, mm: any, dealResult: (arg0: any) => any) {
  if (res.code == 1) {
    session('magic', { user: { username: data.yhm, password: data.mm }, Authorization: 'Basic MDAwMDAwOmp0d3hAMjAyMw==' })
    if (data.jzmm) {
      data.mm = mm
      local('yhxx', data)
    } else if (data.jzyh) {
      delete data.mm
      local('yhxx', data)
    }
    session('userinfo', dealResult ? dealResult(res.data) : res.data)
    router(winName, '', '首页', indexUrl)
  } else {
    w.layui.layer.alert('登录失败：' + res.message, { enter: true })
  }
}
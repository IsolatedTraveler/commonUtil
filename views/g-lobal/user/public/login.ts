import { commonQueryAsyncHttppost_callback } from "../../ajax"
import { getMd5 } from "../../encrypt"
import { alertMsg, loaded, loading } from "../../layer"

export function login(url: any, data: { mm: any }, dealResult: any) {
  let i = loading()
  return getMd5().then((e: any) => {
    let mm = data.mm
    data.mm = w.hex_md5(data.mm)
    return commonQueryAsyncHttppost_callback(url, data, { isNotGetUser: true }).then((res: any) => {
      if (that && that.dealLogin) {
        that.dealLogin(res, data, mm, dealResult)
      } else {
        alertMsg('未提供登录处理逻辑')
      }
      loaded(i)
    }).catch((e: any) => {
      loaded(i)
      w.layui.layer.alert('登录失败，网络连接超时')
    })
  })
}
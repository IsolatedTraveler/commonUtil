import { errFormat } from "../../util/public/errFormat"
import { ajaxRerr } from "../var"

export function dealXhrRes(xhr: XMLHttpRequest) {
  if (xhr.status >= 200 && xhr.status < 300) {
    return JSON.parse(xhr.responseText)
  } else {
    return errFormat('请求失败：' + ajaxRerr[xhr.status])
  }
}
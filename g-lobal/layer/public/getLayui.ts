import { loadJs } from "../../file"
import { dealsUrl, getBaseUrl } from "../../url"

export function getLayui(param?: Array<string>) {
  return judgeLayui().then(() => {
    if (param) {
      return new Promise((resolve, reject) => {
        w.layui.use(param, function () {
          resolve(null)
        })
      })
    }
  })
}
function judgeLayui() {
  if (w.layui) {
    return Promise.resolve()
  } else {
    return loadJs(dealsUrl('/lib23/js/layui-v2.5.7/layui.js', getBaseUrl()))
  }
}
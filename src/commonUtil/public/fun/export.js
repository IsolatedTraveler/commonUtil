import { BASE64, that } from "../../var/init"
import { setIframe } from "./deeps"
import { down } from "./down"
import { loaded, loading, strToUrl, val, init, getParamsUrl } from "./init"
import { dealsUrl } from "./url"
export function expExcel(param, type = '1') {
  let index = loading(), title = param.title || '导出'
  if (type === '1') {
    let elem = $(param.elem), body = elem.find('tbody').eq(0).clone().html(), html
    body = body.replace(/(<td ((?!style)[^>])*)(style[='"]+)*([^>]*)(>)/g, function(a, b, c, d,e ,f) {
      if(d) {
        return b + d + "mso-number-format:'\\@';" + e + f
      } else {
        return b + ' style="mso-number-format:\'\\@\';"' + f
      }
    })
    html = [
      '<html xmlns:svg="http://www.w3.org/2000/svg"><head><meta name="content-type" content="text/html" charset="UTF-8"><title>',
      title,
      '</title></head><body>',
      '<table><thead>',
      param.addBefore || '',
      elem.find('thead').eq(0).html(),
      '</thead><tbody>',
      body,
      param.addAfter || '',
      '</tbody></table></body>'
    ].join('')
    down(strToUrl(html, 'application/vnd.ms-excel'), title + '.xls')
    loaded(index)
  } else {
    let pro = Promise.resolve()
    if (!BASE64) {
      val('isBase64', true)
      pro = init()
    }
    pro.then(e => {
      setIframe(getParamsUrl({
        data: BASE64.encode(JSON.stringify({data: that.getPostData(param.data, true), title, filename: param.filename || ''}))
      }, dealsUrl('/rest/exportExcel/' + param.mkbh, that.getServiceUrl())), 5 * 60 * 1000, function() {
        loaded(index)
      }, function() {
        loaded(index)
        layui.layer.alert(title + '下载失败：请联系管理员')
      })
      setTimeout(() => {
        loaded(index)
      }, 1000);
    })
  }
}
export default {
  expExcel
}
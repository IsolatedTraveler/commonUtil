import { setExpHtml, ExpExcelParam, getTableHtml } from "../fun"

type ExpExcelType = 1 | 2 | 3
export function expExcel(param: ExpExcelParam, type: ExpExcelType) {
  const title = param.title || '导出'
  if (type === 1) {
    // html导出
    const elem = $(param.elem), body = elem.find('tbody').eq(0).clone().html().replace(/(<td ((?!style)[^>])*)(style[='"]+)*([^>]*)(>)/g, function (a: string, b: string, c: string, d: string, e: string, f: string) {
      if (d) {
        return b + d + "mso-number-format:'\\@';" + e + f
      } else {
        return b + ' style="mso-number-format:\'\\@\';"' + f
      }
    })
    setExpHtml(title, { body, head: elem.find('thead').eq(0).html() }, param)
  } else if (type === 2) {
    setExpHtml(title, getTableHtml(param), param)
    // 数据导出
  } else {
    // 通过java接口导出
  }
}
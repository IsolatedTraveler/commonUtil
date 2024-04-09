import { down } from "../../file"
import { strToUrl } from "../../url"

export interface ExpExcelParam {
  title?: string
  elem?: string
  data?: Array<any>
  head?: string
  cols?: Array<string>
  colsObj?: Array<Array<string>>
  addBefore?: string
  addAfter?: string
}
interface Table {
  body: string
  head: string
}
export function setExpHtml(title: string, { body, head }: Table, { addBefore = '', addAfter = '' }: ExpExcelParam) {
  const html = strToUrl([
    '<html xmlns:svg="http://www.w3.org/2000/svg"><head><meta name="content-type" content="text/html" charset="UTF-8"><title>',
    title,
    '</title><style>table{border-collapse:collapse;}td,th{border:1px solid #dcdcdc;padding: 0 .5em}</style></head><body>',
    '<table><thead>',
    addBefore,
    head,
    '</thead><tbody>',
    body,
    addAfter,
    '</tbody></table></body>'
  ].join(''), 'application/vnd.ms-excel')
  down(html, title + '.xls')
}
export function getTableHtml(param: ExpExcelParam) {
  const data = param.data || [], colsObj = param.colsObj || []
    , cols = param.cols || colsObj.map(it => it[0]) || []
    , head = param.head || '<tr>' + colsObj.map(it => `<th>${it[1] || ''}</th>`).join('') + '</tr>'
  return {
    head,
    body: data.map(it => {
      return '<tr>' + cols.map(key => {
        return '<td name="' + key + '" style="mso-number-format:\'\\@\';">' + (it[key] || '') + '</td>'
      }).join('') + '</tr>'
    }).join('')
  }
}
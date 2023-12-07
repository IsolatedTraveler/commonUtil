import { dataProp, pageSize, getData } from "../../../var/index";
import * as mx from './body/index'
function renderMx({ lx, ms, val }) {
  return mx?.[lx]?.[ms]?.(val) || ''
}
export function dealData(data) {
  return { url: data.url || data, data: data.data }
}
export function renderBody({ body, id, styleCss, pageClass, interface: jk }) {
  dataProp.push({ id, interface: jk.save })
  var html = `<div class="layui-form" lay-filter="${id}" id="${id}"><style>${styleCss}</style>` + body.map(arr => {
    return `<page size="${pageSize}" class=" ${pageClass}">${arr.map(it => renderMx(it)).join('')}</page>`
  }).join('') + '</div>'
  if (getData) {
    getData(dealData(jk.getData), id)
  }
  return html
}

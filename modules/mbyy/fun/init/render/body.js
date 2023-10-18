import { pageElem, pageSize } from "../../../var/index";
import * as mx from './body/index'
function renderMx({ lx, ms, val }, id) {
  mx?.[lx]?.[ms](val, id)
}
export function renderBody(data, id) {
  pageElem.append(data.map(arr => {
    return `<page size="${pageSize}">${arr.map(it => renderMx(it, id)).join('')}</page>`
  }).join(''))
}

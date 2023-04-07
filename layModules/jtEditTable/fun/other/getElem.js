/* eslint-disable no-unused-vars */
import { data, elem_p, elem_t_b, elem_t_box, elem_t_s, elem_t_v, selected_tr } from "../../var/index";

export function getElem() {
  elem_t_v = elem_p.find('>.layui-table-view')
  elem_t_box = elem_t_v.find('>.layui-table-box')
  elem_t_s = elem_t_box.find('>.layui-table-body,>.layui-table-fixed>.layui-table-body')
  elem_t_b = elem_t_s.find('>table>tbody')
}
export function getTrElem(i) {
  return elem_t_b.find(`tr[data-index="${i}"]`)
}
export function getTrElemLast(i) {
  let tr = getTrElem(i)
  return tr[0] ? tr : elem_t_b.find(`tr[data-index]:last-child`)
}
export function getInputElem(tr, name) {
  return tr.find(`[name="${name}"]`)
}
export function getInputElems(tr) {
  return tr.find(commonUtil.kbjbg)
}
export function getTrIndex(i, msg) {
  if (i === null || i === undefined) {
    if (selected_tr) {
      i = selected_tr.index
    } else {
      return getIndex(false, msg)
    }
  }
  if (i < 0 || i > data.length) {
    i = false
  }
  return getIndex(i, msg)
}
function getIndex(i, msg) {
  return i === false ? Promise.reject(msg) : Promise.resolve(i)
}
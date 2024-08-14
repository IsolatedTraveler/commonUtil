import { TableColDate, uuid } from "GMAddInput"
import { cols, popContentElem } from "../var"
import { renderDate } from "./renderDate"
import { renderInput } from "./renderInput"
import { renderSelect } from "./renderSelect"
function getMarginLeft(judge: boolean) {
  return judge ? 'margin-left:0;' : 'margin-left:12px;'
}
export function renderPop() {
  const id = uuid('table-xxxx-yxxx-xxxx')
  let form: string = '<div class="layui-form" style="width:100%;">', table: string = `<div style="width:100%;overflow: hidden;min-height:260px"><table id="${id}" lay-filter=${id}>`
  cols.map((it, i) => {
    it.field = it.field || i
    form += `<div class="layui-form-item" style="${getMarginLeft(i % 3 == 0)}"><label class="layui-form-label">${it.title}</label><div class="layui-input-block">`
    switch (it.type) {
      case 'select':
        form += renderSelect(it, i)
        break
      case 'date':
      case 'datetime':
        form += renderDate(it, i)
        break
      default:
        form += renderInput(it, i)
        break
    }
    form += '</div></div>'
  })
  form += `<button type="button" class="layui-btn" style="${getMarginLeft(cols.length % 3 == 0)}">添加</button></div>`
  table += `</table></div><div class="z-bot"><button type="button" class="layui-btn">确定</button><button type="button" class="layui-btn" style="${getMarginLeft(false)}">取消</button></div>`
  popContentElem.html(form + table)
  window.layui.use(['laydate', 'table'], function () {
    window.layui.table.render({
      elem: '#' + id,
      data: [[1, 2, 3, 4]],
      cols: [cols]
    })
    popContentElem.find('[layDate]').each((_i, elem) => {
      let id = (elem.dataset.id || 0) as number, { type, min, max, format } = cols[id] as TableColDate
      if (!format) {
        if (type === 'date') {
          format = 'yyyy/MM/dd'
        } else if (type === 'datetime') {
          format = 'yyyy/MM/dd hh:mm:ss'
        }
      }
      window.layui.laydate.render({
        elem,
        type,
        min,
        max,
        format
      })
    })
  })
}
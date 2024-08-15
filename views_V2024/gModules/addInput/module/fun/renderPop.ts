import { TABLE_EVENT_ID, TableColDate, id } from "GMAddInput"
import { cols, popContentElem } from "../var"
import { renderDate } from "./renderDate"
import { renderInput } from "./renderInput"
import { renderSelect } from "./renderSelect"
import { bindPopEvent } from "./bindPopEvent"
function getMarginLeft(judge: boolean) {
  return judge ? 'margin-left:0;' : 'margin-left:12px;'
}
export function renderPop() {
  let form: string = `<div class="layui-form" style="width:100%;" lay-filter=${id}>`, table: string = `<div style="width:100%;overflow: hidden;min-height:260px"><table id="${id}" lay-filter="${id}">`
  cols.map((it, i) => {
    it.field = it.field || i
    form += `<div class="layui-form-item" style="${getMarginLeft(i % 3 == 0)}"><label class="layui-form-label">${it.title}</label><div class="layui-input-line">`
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
  form += `<input type="hidden" name="_id"><button class="layui-btn layui-btn-sm" lay-submit="" lay-filter="${id}-add" style="${getMarginLeft(cols.length % 3 == 0)}">添加</button></div>`
  table += `</table></div><div class="z-bot"><button submit class="layui-btn">确定</button><button cancel class="layui-btn" style="${getMarginLeft(false)}">取消</button></div>`
  popContentElem.html(form + table)
  window.layui.use(['laydate', 'table', 'form'], function () {
    const table = window.layui.table
      , form = window.layui.form
    window.layui.table.render({
      elem: '#' + id,
      data: [[1, 2, 3, 4]],
      cols: [[].concat(cols as any, [{ title: '操作', templet: `#${TABLE_EVENT_ID}`, align: 'center', width: '100' }] as any)]
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
    form.renderForm(popContentElem)
    bindPopEvent(table, form)
  })
}
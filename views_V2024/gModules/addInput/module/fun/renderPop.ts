import { cols, popElem } from "../var"
import { renderDate } from "./renderDate"
import { renderInput } from "./renderInput"
import { renderSelect } from "./renderSelect"

export function renderPop() {
  let form: string = '<div class="layui-form">', table: string = '<div><table>'
  cols.map(it => {
    switch (it.type) {
      case 'select':
        form += renderSelect(it)
        break
      case 'date':
        form += renderDate(it)
        break
      default:
        form += renderInput(it)
        break
    }
  })
  form += '</div>'
  table += '</table></div>'
  popElem.html(form + table)
}
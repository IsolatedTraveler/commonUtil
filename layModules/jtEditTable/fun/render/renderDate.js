import { date_key_obj, isInit, third_laydate } from "../../var/index"
import { formChange } from "../val/form"
import { trDataV } from "../val/trDataV"

export function renderDate(tr, i) {
  let trData = trDataV(i)
  tr.find('[laydate]').each((i, elem) => {
    let el = $(elem), name = el.attr('name'), option = {
      elem,
      value: trData[name],
      done(v) {
        el.val(v)
        i = tr.attr('data-index')
        if (isInit) {
          formChange(tr, i, elem, name)
        }
      }
    }
    if (!date_key_obj[name]) {
      date_key_obj[name] = {
        format: el.attr('format') || 'yyyy/MM/dd',
        type: el.attr('laydate') || 'date'
      }
    }
    third_laydate.render({ ...option, ...date_key_obj[name] })
  })
}
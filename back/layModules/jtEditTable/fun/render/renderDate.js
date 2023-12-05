import { date_key_obj, third_laydate } from "../../var/index"
import { trDataV } from "../val/trDataV"
import { valCol } from "../val/valCol"

export function renderDates(tr, i) {
  let trData = trDataV(i)
  tr.find('[laydate]').each((j, elem) => {
    let el = $(elem), key = el.attr('name'), option = {
      elem,
      value: trData[key],
      done(v) {
        valCol(tr, i, key, v)
      }
    }
    date_key_obj[key] = date_key_obj[key] || {
      format: el.attr('format') || 'yyyy/MM/dd',
      type: el.attr('laydate') || 'date'
    }
    third_laydate.render({ ...option, ...date_key_obj[key] })
  })
}
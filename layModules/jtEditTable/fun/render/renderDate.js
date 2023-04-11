import { date_key_obj, third_laydate } from "../../var/index"
import { getChangeCols } from "../val/rowUpdate"
import { trDataV } from "../val/trDataV"

export function renderDate(tr, i) {
  let trData = trDataV(i)
  tr.find('[laydate]').each((j, elem) => {
    let el = $(elem), name = el.attr('name'), option = {
      elem,
      value: trData[name],
      done(v) {
        let o = JSON.parse(JSON.stringify(trDataV(i)))
        trDataV(i, name, v)
        getChangeCols(trDataV(i), o, i, tr, [name])
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
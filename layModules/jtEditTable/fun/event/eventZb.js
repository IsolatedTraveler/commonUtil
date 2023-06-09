import { data, isInit, zb_change_cols, zb_data } from "../../var/index";
import { closeZzc, openZzc } from "../other/zzc";
import { dealVal } from "../val/dealVal";
import { renderSelects } from "../render/renderSelect";

export function eventZbEditInputCol(e) {
  let elem = $(e.currentTarget), key = elem.attr('name'), v = dealVal(elem.val())
  if (isInit && v !== zb_data[key]) {
    openZzc('eventZbEditInputCol')
    Promise.all(data.map((it, i) => {
      return renderSelects(i, zb_change_cols[key])
    })).finally(() => closeZzc('eventZbEditInputCol'))
  }
  zb_data[key] = v
}
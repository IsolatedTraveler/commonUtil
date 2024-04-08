import { def_data_tr, tr_key } from "../../var/index"
import { endRender, startRender } from "../other/changeIsInit"
import { getTrElem } from "../other/getElem"
import { trDataV } from "../val/trDataV"
import { valChanges } from "../val/valCol"

export function rowUpdate(d, i) {
  startRender('rowUpdate')
  let old = trDataV(i)
  d = Object.assign({}, def_data_tr, d)
  trDataV(i, undefined, d)
  return valChanges(tr_key, d, old, i, getTrElem(i)).finally(() => endRender('rowUpdate'))
}
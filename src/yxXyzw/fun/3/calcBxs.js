import { gbjfb } from "../../var/gdcs"
import { bl, kbcs } from "../../var/kbcs"
import { reSetCs, setCsObj, setMzbx } from "../1/setCs"
import { getDbxx } from "../2/dealJf"

export function calcBxs(sydbjf, cs, gdsy) {
  return reSetCs(null, kbcs.qtbx + gdsy / 10).then(old => {
    sydbjf = Math.floor(sydbjf / bl / 10) * 10
    setMzbx(sydbjf + old.mzbx)
    var obj = getDbxx()
    while (obj.dbcs < cs) {
      sydbjf += 10
      setMzbx(sydbjf)
      obj = getDbxx()
    }
    setCsObj(old)
    sydbjf -= old.mzbx
    var tggq = Math.ceil(sydbjf / gbjfb / 10) * 10
    return { xybx: sydbjf, tggq: tggq > sydbjf ? sydbjf : tggq, sydbjf: obj.sydbjf }
  })
}
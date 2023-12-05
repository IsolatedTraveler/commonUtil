import { calcBxs } from "../fun/3/calcBxs"
import { getDbxx } from "../fun/2/dealJf"
import { getJfBl } from "../fun/2/getJfBl"
import { dbzf, dcdbjf, dcdbsxjf } from "../var/gdcs"
import { kbcs } from "../var/kbcs"


export { getDbxx } from "../fun/2/dealJf"
export function getSyBxs(cs = 1, ts = 0, hssy = 180) {
  var { dbcs, sydbjf } = getDbxx(),
    jljf = (cs * dbzf / dcdbsxjf - Math.floor(kbcs.dqdbf / dcdbsxjf) - 1) * dcdbjf,
    gdsy = hssy * ts + jljf
  if (dbcs < cs) {
    return getJfBl().then(() => {
      return calcBxs(dbzf - sydbjf, cs, gdsy)
    })
  } else {
    return Promise.resolve(calcBxs(-sydbjf, cs, gdsy))
  }
}

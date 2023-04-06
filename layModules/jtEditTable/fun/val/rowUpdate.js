import { getTrElem, getTrIndex } from "../other/getElem"
import { closeZzc, openZzc } from "../other/zzc"

export function rowUpdate(d, i) {
  openZzc()
  return getTrIndex(i, '未获取到要更新的操作行').then(res => {
    i = res
    let tr = getTrElem(i)
    console.log(tr)
  }).finally(closeZzc)
}
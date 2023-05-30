import { bl, dcjfh } from "../var/kbcs"
import { getDcjfh, getZf } from "./dealJf"
import { reSetCs, setCsObj } from "./setCs"

export function getJfBl() {
  if (!bl) {
    getDcjfh()
    return reSetCs(dcjfh).then((res) => {
      bl = getZf().zf / dcjfh
      setCsObj(res)
      return bl
    })
  }
  return Promise.resolve(bl)
}
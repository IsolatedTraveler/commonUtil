import { bl, dcjfh } from "../../var/kbcs"
import { getDcjfh, getZf } from "../1/dealJf"
import { reSetCs, setCsObj } from "../1/setCs"

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
import { autoHeight, done, elem_t_s, elem_t_v, isInit } from "../../var/index"
import { closeZzc } from "../other/zzc"
export function loaded() {
  if (autoHeight) {
    let auto = {height: 'auto'}
    elem_t_v.css(auto)
    elem_t_s.css(auto)
  }
  done && done()
  closeZzc()
  isInit = true
  console.log(isInit)
}
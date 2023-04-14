import { autoHeight, done, elem_t_s, elem_t_v } from "../../var/index"
import { endRender } from "../other/changeIsInit"
export function tableLoaded() {
  if (autoHeight) {
    let auto = {height: 'auto'}
    elem_t_v.css(auto)
    elem_t_s.css(auto)
  }
  done && done()
  endRender('init reload')
}
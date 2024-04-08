import { autoHeight, done, elem_t_s, elem_t_v } from "../../var/index"
export function tableLoaded() {
  if (autoHeight) {
    let auto = { height: 'auto' }
    elem_t_v.css(auto)
    elem_t_s.css(auto)
  }
  done && done()
}
import { col_change_cols, select_key, zb_change_cols, zb_key } from "../../var/index";
// eslint-disable-next-line no-unused-vars
import { zb_filter } from "../../var/index";

export function initSelectConfig(d) {
  if (d) {
    select_key = Object.keys(d)
    zb_change_cols = {}
    col_change_cols = {}
    select_key.forEach(key => {
      let it = d[key], filterRow = it.filterRow, filterZb = it.filterZb
      setChangeCol(key, filterZb, zb_change_cols)
      setChangeCol(key, filterRow, col_change_cols)
    })
    zb_key = Object.keys(zb_change_cols)
    zb_filter = zb_key.map(it => `[name="${it}"]`).join(',')
  }
  return d
}
function setChangeCol(key, arr, obj) {
  arr.forEach(i => {
    if (zb_change_cols[i]) {
      obj.push(key)
    } else {
      obj[i] = [key]
    }
  })

}
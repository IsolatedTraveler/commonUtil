import { col_change_cols, select_key, select_key_yxj, zb_change_cols, zb_key } from "../../var/index";
// eslint-disable-next-line no-unused-vars
import { zb_filter } from "../../var/index";

export function initSelectConfig(d) {
  if (d) {
    select_key_yxj = {}
    select_key = Object.keys(d)
    zb_change_cols = {}
    col_change_cols = {}
    select_key.forEach(key => {
      let it = d[key], filterRow = it.filterRow, filterZb = it.filterZb
      getSelectYxj(d, select_key_yxj, key, filterRow)
      setChangeCol(key, filterZb, zb_change_cols)
      setChangeCol(key, filterRow, col_change_cols)
    })
    zb_key = Object.keys(zb_change_cols)
    zb_filter = zb_key.map(it => `[name="${it}"]`).join(',')
  }
  return d
}
function getSelectYxj(d, map, key, arr, yxj = 0) {
  if (!map[key]) {
    if (arr && arr[0]) {
      map[key] = { p: arr, c: [] }
      arr.map(pKey => {
        if (d[pKey]) {
          yxj = Math.max(yxj, getSelectYxj(d, map, pKey, d[pKey].filterRow, yxj))
          map[pKey].c.push(key)
        }
      })
      map[key].yxj = yxj
    } else {
      map[key] = { yxj, c: [] }
    }
  }
  return map[key].yxj + 1
}
function setChangeCol(key, arr, obj) {
  if (arr && arr[0]) {
    arr.forEach(i => {
      if (zb_change_cols[i]) {
        obj.push(key)
      } else {
        obj[i] = [key]
      }
    })
  }
}
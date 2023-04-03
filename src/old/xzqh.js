import { that } from "../var/init"

export function xzqh(id) {
  var data = that.commonHttppost('/zs03-ywzd/xzqhgl/s-xzqh', {id}).data
  return (data ? data[0] : data) || {}
}
export function zxzqhget(sjid) {
  return that.commonHttppost('/zs03-ywzd/xzqhgl/s-xzqh', {sjid}).data
}
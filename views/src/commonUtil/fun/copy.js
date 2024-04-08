import { copyArr, copyObj } from "../var/copy"


export function copyCheckData(d1, d2) {
  if (d1 && d2) {
    let t = Object.prototype.toString.call(d1)
    if (t === copyArr || t === copyObj) {
      t = Object.prototype.toString.call(d2)
      return t === copyArr || t === copyObj
    }
  }
  return false
}
export function copyDeep(data, v) {
  for (var key in v) {
    if (copyCheckData(data[key], v[key])) {
      data[key] = copyDeep(data[key], v[key])
    } else {
      data[key] = v[key]
    }
  }
  return data
}
export function copy(data, v) {
  for (let key in v) {
    data[key] = v[key]
  }
  return data
}
export default {
  copyDeep,
  copy
}
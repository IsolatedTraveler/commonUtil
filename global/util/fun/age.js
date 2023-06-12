import { prefix } from "../prefix"
import { dateExp } from "../var/age"

export function setAge(obj, v, lastKey, total) {
  if (v < 0) {
    obj[lastKey]--
    v += total
  }
  return v
}
export function setAgeMonth(obj, start, end, v) {
  v = v === undefined ? end.getMonth() - start.getMonth() : v
  obj.M = setAge(obj, v, 'y', 12)
  return !(obj.y < 0)
}
export function setAgeDay(obj, start, end, v) {
  v = v === undefined ? end.getDate() - start.getDate() : v
  obj.d = setAge(obj, v, 'M', end.addMonth(-1).getMonthDays())
  return setAgeMonth(obj, start, end, obj.M)
}
export function setAgeHour(obj, start, end, v) {
  v = v === undefined ? end.getHours() - start.getHours() : v
  obj.h = setAge(obj, v, 'd', 24)
  return setAgeDay(obj, start, end, obj.d)
}
export function setAgeMinute(obj, start, end, v) {
  v = v === undefined ? end.getMinutes() - start.getMinutes() : v
  obj.m = setAge(obj, v, 'h', 60)
  return setAgeHour(obj, start, end, obj.h)
}
export function setAgeSecond(obj, start, end, v) {
  v = v === undefined ? end.getSeconds() - start.getSeconds() : v
  obj.s = setAge(obj, v, 'm', 60)
  return setAgeMinute(obj, start, end, obj.m)
}
export function ageFormat(obj, format) {
  let matchs = [...format.matchAll(dateExp)]
  matchs.forEach(([v, k]) => {
    let len = v.length
    format = format.replace(v, len == 1 ? obj[k] : prefix(obj[k], v.length))
  })
  return format
}
export default {
  setAgeMonth,
  setAgeDay,
  setAgeMinute,
  setAgeHour,
  setAgeSecond,
  ageFormat
}
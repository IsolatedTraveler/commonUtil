import { setAgeMonth, setAgeDay, setAgeHour, setAgeMinute, setAgeSecond, ageFormat, DateObj } from '../fun/age'
import { dateKeys } from '../var/age'

export function getAge(start: Date, end: Date, format: any = {}) {
  end = end || new Date()
  start = start instanceof Date ? start : new Date(start)
  let obj: DateObj = {} as any, y
  y = end.getFullYear() - start.getFullYear()
  obj.y = y
  if (y >= 0 && setAgeMonth(obj, start, end) && setAgeDay(obj, start, end) && setAgeHour(obj, start, end) && setAgeMinute(obj, start, end) && setAgeSecond(obj, start, end)) {
    if (format) {
      if (typeof format == 'string') {
        return ageFormat(obj, format)
      } else {
        format = Object.assign({ y: 'y岁', M: 'M月', d: 'd天', h: 'h时', m: 'm分', s: 's秒' }, format)
        let len = dateKeys.length
        for (let i = 0; i < len; i++) {
          let key = dateKeys[i]
          if (obj[key] && format[key]) {
            return ageFormat(obj, format[key])
          }
        }
      }
    } else {
      return obj
    }
  }
}
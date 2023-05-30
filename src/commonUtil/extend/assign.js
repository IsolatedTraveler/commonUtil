import { copy, copyCheckData, copyDeep } from "../fun/copy"

export default function assign() {
  let data, len = arguments.length, i = 0, judge = false
  if (arguments[0] === true) {
    i = 1
    judge = true
  }
  data = arguments[i++] || {}
  for (; i < len; i++) {
    if (copyCheckData(data, arguments[i])) {
      data = judge ? copyDeep(data, arguments[i]) : copy(data, arguments[i])
    }
  }
  return data
}
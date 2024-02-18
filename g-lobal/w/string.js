// 字符串处理
function dateFormat(fmt = 'yyyy/MM/dd') {
  fmt = fmt.split('')
  let i = 0, v = this.match(/[0-9]/g)
  return fmt.map(it => {
    if (/[yMdhms]/.test(it)) {
      it = v[i] || ''
      i++
    }
    return it
  }).join('')
}
function toDate(fmt, fmt1) {
  fmt = fmt.split('')
  var str = 'yyyy/MM/dd hh:mm:ss', i = 0
  fmt.forEach((it) => {
    if (/[yMdhmsS]/.test(it)) {
      str = str.replace(it, this[i] | '0')
      i++
    } else if (this[i] == ' ' || isNaN(this[i])) {
      i++
    }
  })
  str = new Date(str.replace(/[yMdhmsS]/g, '0').replace(/\/00/g, '/01'))
  if (fmt1) {
    return str.format(fmt1)
  }
  return str
}
Object.defineProperties(w.String, {
  dateFormat,
  toDate
})
if (!String.prototype.dateFormat) {
  String.prototype.dateFormat = dateFormat
  String.prototype.toDate = toDate
}
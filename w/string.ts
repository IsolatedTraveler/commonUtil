// 字符串处理
function dateFormat(this: any, fmt: string = 'yyyy/MM/dd') {
  const fmtArr = fmt.split('')
  let i = 0, v = this.match(/[0-9]/g)
  return fmtArr.map(it => {
    if (/[yMdhms]/.test(it)) {
      it = v[i] || ''
      i++
    }
    return it
  }).join('')
}
function toDate(this: any, fmt: string, fmt1: string) {
  const fmtArr = fmt.split('')
  var str = 'yyyy/MM/dd hh:mm:ss', i = 0
  fmtArr.forEach((it) => {
    if (/[yMdhmsS]/.test(it)) {
      str = str.replace(it, this[i] || '0')
      i++
    } else if (this[i] == ' ' || isNaN(this[i])) {
      i++
    }
  })
  const date = new Date(str.replace(/[yMdhmsS]/g, '0').replace(/\/00/g, '/01'))
  if (fmt1) {
    return date.format(fmt1)
  }
  return date
}
if (!String.prototype.dateFormat) {
  String.prototype.dateFormat = dateFormat
  String.prototype.toDate = toDate
}
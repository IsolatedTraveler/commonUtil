interface DateFormats {
  [key: string]: any
  'M+': number
  'd+': number
  'h+': number
  'm+': number
  's+': number
  'q+': number
  S: number
}
interface Date {
  format(fmt: string): string
  addYear(num: string | number): Date
  addMonth(num: string | number): Date
  addDay(num: string | number): Date
  addHour(num: string | number): Date
  addMinute(num: string | number): Date
  addSeconds(num: string | number): Date
  getMonthDay(num: number): Date
  getSeason(num: number): Date
  getWeek(num: string | number): Date
  getMonthDays(): number
  getYearDay(): number
}
function format(this: any, fmt = 'yyyy/MM/dd'): string {
  var o: DateFormats = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "h+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    "S": this.getMilliseconds() //毫秒
  }
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}
function addDay(this: any, num: string | number = 1) {
  num = Number(num)
  if (num > parseInt(num as any as string)) {
    return this.addHour(num * 24)
  }
  let date = new Date(this)
  date.setDate(date.getDate() + num)
  return date
}
function addHour(this: any, num: string | number = 1) {
  num = Number(num)
  if (num > parseInt(num as any)) {
    return this.addMinute(num * 60)
  }
  let date = new Date(this)
  date.setHours(date.getHours() + num)
  return date
}
function addMinute(this: any, num: string | number) {
  num = Number(num)
  if (num > parseInt(num as any)) {
    return this.addSeconds(num * 60)
  }
  let date = new Date(this)
  date.setMinutes(date.getMinutes() + num)
  return date
}
function addSeconds(this: any, num: number) {
  let date = new Date(this)
  date.setSeconds(date.getSeconds() + num)
  return date
}
function getMonthDays(this: any) {
  let date = new Date(this)
  date.setMonth(date.getMonth() + 1)
  date.setDate(0)
  return date.getDate()
}
function getYearDay(this: any) {
  let date = new Date(this)
  date.setMonth(2)
  date.setDate(0)
  return date.getDate() === 28 ? 365 : 366
}
function addMonth(this: any, num: string | number = 1) {
  let date = new Date(this), m = date.getMonth()
  num = Number(num)
  date.setMonth(m + num)
  if ((m + num) % 12 < date.getMonth()) {
    date = date.addMonth(-1)
    date.setDate(date.getMonthDays())
  }
  return date
}
function addYear(this: any, num: string | number = 1) {
  let date = new Date(this), m = date.getMonth()
  num = Number(num)
  date.setFullYear(date.getFullYear() + num)
  if (m < date.getMonth()) {
    date = date.addMonth(-1)
    date.setDate(date.getMonthDays())
  }
  return date
}
function getWeek(this: any, num: string | number = 1) {
  let date = new Date(this)
  num = Number(num)
  date.setDate(date.getDate() + num - (date.getDay() || 7))
  return date
}
function getMonthDay(this: any, num: number = 1) {
  let date = new Date(this)
  date.setDate(num)
  return date
}
function getSeason(this: any, num: number = 1) {
  let date = new Date(this)
  date.setMonth(Math.floor(date.getMonth() / 3) * 3)
  date.setDate(num)
  return date
}
if (!Date.prototype.format) {
  Date.prototype.format = format
  Date.prototype.addDay = addDay
  Date.prototype.addHour = addHour
  Date.prototype.addMinute = addMinute
  Date.prototype.addSeconds = addSeconds
  Date.prototype.getMonthDays = getMonthDays
  Date.prototype.getYearDay = getYearDay
  Date.prototype.addMonth = addMonth
  Date.prototype.addYear = addYear
  Date.prototype.getWeek = getWeek
  Date.prototype.getMonthDay = getMonthDay
  Date.prototype.getSeason = getSeason
}
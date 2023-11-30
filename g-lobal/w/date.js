function format(fmt = 'yyyy/MM/dd') {
  var o = {
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
function addDay(num = 1) {
  num = Number(num)
  if (num > parseInt(num)) {
    return this.addHour(num * 24)
  }
  let date = new Date(this)
  date.setDate(date.getDate() + num)
  return date
}
function addHour(num = 1) {
  num = Number(num)
  if (num > parseInt(num)) {
    return this.addMinute(num * 60)
  }
  let date = new Date(this)
  date.setHours(date.getHours() + num)
  return date
}
function addMinute(num) {
  num = Number(num)
  if (num > parseInt(num)) {
    return this.addSeconds(num * 60)
  }
  let date = new Date(this)
  date.setMinutes(date.getMinutes() + num)
  return date
}
function addSeconds(num) {
  let date = new Date(this)
  date.setSeconds(date.getSeconds() + num)
  return date
}
function getMonthDays() {
  let date = new Date(this)
  date.setMonth(date.getMonth() + 1)
  date.setDate(0)
  return date.getDate()
}
function getYearDay() {
  let date = new Date(this)
  date.setMonth(2)
  date.setDate(0)
  return date.getDate() === 28 ? 365 : 366
}
function addMonth(num = 1) {
  let date = new Date(this), m = date.getMonth()
  num = Number(num)
  date.setMonth(m + num)
  if ((m + num) % 12 < date.getMonth()) {
    date = date.addMonth(-1)
    date.setDate(date.getMonthDays())
  }
  return date
}
function addYear(num = 1) {
  let date = new Date(this), m = date.getMonth()
  num = Number(num)
  date.setFullYear(date.getFullYear() + num)
  if (m < date.getMonth()) {
    date = date.addMonth(-1)
    date.setDate(date.getMonthDays())
  }
  return date
}
function getWeek(num = 1) {
  let date = new Date(this)
  num = Number(num)
  date.setDate(date.getDate() + num - (date.getDay() || 7))
  return date
}
function getMonthDay(num = 1) {
  let date = new Date(this)
  date.setDate(num)
  return date
}
function getSeason(num = 1) {
  let date = new Date(this)
  date.setMonth(Math.floor(date.getMonth() / 3) * 3)
  date.setDate(num)
  return date
}
// 日期处理
Object.defineProperties(w.Date, {
  format,
  addDay,
  addHour,
  addMinute,
  addSeconds,
  getMonthDays,
  getYearDay,
  addMonth,
  addYear,
  getWeek,
  getMonthDay,
  getSeason
})
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
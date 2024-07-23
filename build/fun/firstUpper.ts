export function firstUpper(str: string, judge: boolean = true) {
  return judge ? (str.substring(0, 1).toUpperCase() + str.substring(1)) : str
}
export function firstUppers(str: string, judge: boolean) {
  let arr = str.split('-')
  return arr.map((it, i) => firstUpper(it, !!i || judge)).join('')
}
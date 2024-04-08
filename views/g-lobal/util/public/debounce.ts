export function debounce1(this: any, fun: Function, delay: number): (v?: any, v1?: any, v2?: any, v3?: any, v4?: any, v5?: any, v6?: any) => any {
  let time: any = null
  return function (this: any) {
    let args = arguments
    clearTimeout(time)
    time = setTimeout(() => {
      fun.apply(that || this, args)
    }, delay)
  }
}
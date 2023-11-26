export function debounce1(fun: Function, delay: number) {
  let time: any = null
  return () => {
    let args = arguments
    clearTimeout(time)
    time = setTimeout(() => {
      fun.apply(that || this, args)
    }, delay)
  }
}
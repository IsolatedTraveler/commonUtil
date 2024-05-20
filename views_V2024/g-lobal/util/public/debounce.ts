/**
 * @description 创建一个防抖(debounce)函数，用于限制高频触发的操作。
 * 当调用次数频繁时，只有在最后一次调用后的指定延迟时间内没有再次调用，才会执行该操作。
 *
 * @template T - 函数接受的参数类型数组，允许为任意数量和类型的参数。
 * @template R - 原始函数的返回类型。
 * @param {(...args: T) => R} fn - 需要防抖处理的函数。
 * @param {number} delay - 延迟执行的时间（毫秒）。在这个时间之后，若没有新的触发，则执行函数。
 * @returns {(...args: T) => void} - 返回一个防抖后的函数，该函数在连续调用时会按照指定的延迟时间执行一次。
 */
export function debounce<T extends unknown[], R>(fn: (...args: T) => R, delay: number): (...args: T) => void {
  let timer: NodeJS.Timeout | null = null
  return (...args: T) => {
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}
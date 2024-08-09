/**
 * unique 函数用于从数组中去除重复的元素。
 * 
 * @param {any[]} arr - 需要去重的数组。
 * @param {boolean} [isPrimitiveTypes=true] - 如果为 true，则认为数组元素都是原始类型，可以使用 Set 去重；
 *                                            如果为 false，则认为数组元素可能包含非原始类型（如对象），需使用 Map 去重。
 * @returns {any[]} - 返回去重后的数组。
 */
export function unique(arr: any[], isPrimitiveTypes: boolean = true) {
  if (isPrimitiveTypes) return [...new Set(arr)]
  const uni = new Map<string, any>()
  arr.forEach(it => uni.set(JSON.stringify(it), it))
  return [...uni.values()]
}

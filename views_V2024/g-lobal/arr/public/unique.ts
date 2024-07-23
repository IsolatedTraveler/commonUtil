export function unique(arr: any[], strick: boolean = true) {
  if (strick) return [...new Set(arr)]
  const uni = new Map<string, any>()
  arr.forEach(it => uni.set(it.toString(), it))
  return [...uni.values()]
}

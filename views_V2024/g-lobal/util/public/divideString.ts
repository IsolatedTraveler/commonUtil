/**
 * 从输入字符串`v`中根据分隔符`split`提取两部分，返回一个包含'dm'和'mc'的对象。
 * 如果'mc`不存在，则默认为'dm'。
 * @param v - 输入字符串，默认为空字符串
 * @param split - 分隔符，默认为 '-'
 * @returns {{ dm: string, mc: string }} 返回的对象 */

export function divideString(v: string, split: string = '-'): string[] {
  if (!v) return []
  return v.split(split)
}
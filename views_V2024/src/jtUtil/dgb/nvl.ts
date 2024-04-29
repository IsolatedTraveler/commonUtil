/**
 * 提供一个简化空值处理的函数，如果数据为null或undefined，则返回指定的备选值。
 * 如果未提供备选值且数据为空，则返回空字符串。
 * 
 * @param {string | null | undefined | number} data - 需要检查的数据。
 * @param {string} mrz - 数据为空时的备选返回值。
 * @returns {any} - 原始数据或备选值。
 */
export function nvl(data: string | null | undefined | number, mrz: string = ''): string | number {
  if (data === 'null') {
    return mrz || ''
  } else if (data === 0) {
    return data
  } else {
    return data || mrz || '';
  }
}
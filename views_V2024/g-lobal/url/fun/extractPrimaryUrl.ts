/**
 * @description 从给定的URL数组或单个URL字符串中，提取与当前页面起源匹配的首要URL。
 * 如果提供的是字符串且不为空，直接返回该字符串。
 * 若为数组，则遍历查找包含当前页面起源的URL，找到则返回；否则返回数组中的第一个URL。
 * 
 * @param {string | string[]} urlsArray - 要检查的URL数组或单个URL字符串。
 * @returns {string} 与当前页面起源匹配的URL，或数组中的首个URL。
*/
export function extractPrimaryUrl(urlsArray: string | string[]): string {
  if (typeof urlsArray === 'string') return urlsArray;
  for (var index = 0; index < urlsArray.length; index++) {
    if (urlsArray[index].includes(window.location.origin)) {
      return urlsArray[index];
    }
  }
  return urlsArray[0] || '';
}
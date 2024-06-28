import { getUrl } from "./getUrl";

/**
 * 将相对URL转换为绝对URL。
 *
 * @param {string} relativeUrl - 需要转换的相对URL字符串。
 * @param {string | URL | Location} [base] - 可选的基础URL，用于解析相对路径。可以是字符串、URL对象或Location对象，默认为当前页面的URL。
 * @returns {string} 绝对化的URL字符串。
 *
 * @description
 * 该函数首先检查输入的相对URL是否已经是绝对URL（以'http://'或'https://'开头），如果是，则直接返回。
 * 接着，使用`getUrl`函数获取基础URL的信息。如果未提供基础URL，将使用当前页面的URL。
 * 然后，对相对URL进行处理，移除开头的"./"和尾部的"/"，并处理"../"以计算上溯层级。
 * 最后，将处理过的相对路径段与基础URL的路径段合并，生成绝对URL并返回。
 */
export function convertToAbsoluteUrl(relativeUrl: string, base?: string | URL | Location): string {
  // 如果relativeUrl已经是绝对URL，则直接返回
  if (/^http[s]*:\/\//i.test(relativeUrl)) {
    return relativeUrl;
  }
  const baseAddress = getUrl(base);
  if (/^\//.test(relativeUrl)) return baseAddress.origin + relativeUrl
  // 分割基础URL的路径并过滤掉空字符串
  let pathParts = baseAddress.pathname.replace(/\/[^/]+\.[^/]+$/, '').split('/').filter(Boolean);
  // 清理relativeUrl，移除开头的"./"
  relativeUrl = relativeUrl.replace(/^\.\//, '');
  // 处理relativeUrl中的"../"，计算需要上溯的层数
  if (relativeUrl.startsWith('../')) {
    const levelUp = relativeUrl.split('/').filter(part => part === '..').length;
    // 根据上溯层数调整基础路径
    pathParts = pathParts.slice(0, -levelUp);
    // 移除relativeUrl中的"../"
    relativeUrl = relativeUrl.replace(/\.\.\//g, '');
  }
  // 合并处理后的路径段，生成完整的路径数组
  pathParts = pathParts.concat(relativeUrl.split('/').filter(Boolean));
  // 生成并返回绝对URL
  return baseAddress.origin + '/' + pathParts.join('/');
}
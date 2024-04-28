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
  // 分割基础URL的路径并过滤掉空字符串
  let pathParts = baseAddress.pathname.split('/').filter(Boolean);
  // 清理relativeUrl，移除开头的"./"和尾部的"/"
  relativeUrl = relativeUrl.replace(/^\.\//, '').replace(/\/$/, '');
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
/**
 * @param {string | URL | Location} [relativeUrl] - 可选参数，可以是字符串、URL对象或Location对象。
 *   如果未提供，将默认使用当前页面的location。
 * @returns {URL | Location} 返回一个URL对象或Location对象。
 *
 * @description 获取或构建URL对象。
 * 该函数检查输入`relativeUrl`的类型，根据以下规则处理：
 * 1. 如果输入已经是URL对象或Location对象，直接返回该对象。
 * 2. 如果输入是字符串，尝试将其解析为URL对象。如果字符串格式正确，则返回新的URL对象；
 *    若格式错误，则在控制台打印错误信息（但当前实现中错误被吞没，无异常抛出）。
 * 3. 如果没有提供输入或输入无法处理，函数将返回当前页面的`location`对象作为默认。
 *
 * 注意：当字符串输入无法转换为URL对象时，当前实现仅记录错误日志而不抛出异常。
 *       在某些应用场景下，可能需要调整错误处理逻辑以适应特定需求。
 */
function getUrl(relativeUrl?: string | URL | Location): URL | Location {
  if (relativeUrl instanceof URL || relativeUrl instanceof Location) {
    return relativeUrl;
  }
  if (typeof relativeUrl === 'string') {
    try {
      return new URL(relativeUrl);
    } catch (error) {
      // 如果字符串不是有效的URL格式，可以选择抛出错误或默认处理
      console.error('Invalid URL:', relativeUrl);
    }
  }
  return location;
}
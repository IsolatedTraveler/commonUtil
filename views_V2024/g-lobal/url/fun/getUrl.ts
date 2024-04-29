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
export function getUrl(relativeUrl?: string | URL | Location): URL | Location {
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
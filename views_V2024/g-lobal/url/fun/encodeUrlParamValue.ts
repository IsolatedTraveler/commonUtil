
/**
 * @description 编码URL参数值，确保特殊字符被安全地转换以便于URL传输。
 *
 * 如果值为对象，则先转换为JSON字符串再进行编码。对于非对象的值，直接进行编码。
 * 如果值为空（null或undefined），返回空字符串以避免在URL中生成无效的`key=`。
 *
 * @param {any} value - 需要编码的值，可以是基本类型、对象或null/undefined。
 * @returns {string} 编码后的值，适合作为URL的一部分。
 */
export function encodeUrlParamValue(value: any) {
  return value ? encodeURIComponent(typeof value === 'object' ? JSON.stringify(value) : value) : ''
}
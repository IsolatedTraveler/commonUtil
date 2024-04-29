/**
 * @description 检查给定值是否包含目标小写查询字符串。
 * 
 * @param value {string} - 待检查的原始字符串。
 * @param lowerQ {string} - 转换为小写的目标查询字符串。
 * @returns {boolean} - 如果`value`包含`lowerQ`，返回true；否则，返回false。
 */
function isMatch(value: string, lowerQ: string): Boolean {
  return value.toLowerCase().includes(lowerQ)
}
/**
 * @description 过滤组合框数据，基于查询字符串匹配行数据中的指定键或默认文本字段。
 * 
 * @param context {JQuery<HTMLElement>} - 当前组合框的jQuery包装器，用于获取配置。
 * @param query {string} - 查询字符串，用于匹配数据。
 * @param rowData {Record<string, any>} - 单行数据对象。
 * @param keysToCheck {string[]} - 要检查的键数组，默认为空时使用textField作为匹配键。
 * @returns {boolean} - 如果数据匹配查询条件，返回true；否则，返回false。
 * @throws 可能抛出错误，由`GLOBAL$BROWSER$.errorTrace`处理。
 */
export function filterComboboxData(this: any, q: string, row: any, keys: string[] = []): Boolean {
  try {
    const lowerQ = q.toLowerCase();

    if (keys.length) {
      return keys.some(key => row[key] && isMatch(row[key], lowerQ));
    } else {
      const opts = $(this).combobox('options');
      return isMatch(row[opts.textField], lowerQ);
    }
  } catch (e) {
    GLOBAL$BROWSER$.errorTrace(e);
    return false;
  }
}
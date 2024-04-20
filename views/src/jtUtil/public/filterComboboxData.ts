function isMatch(value: string, lowerQ: string) {
  return value.toLowerCase().includes(lowerQ)
}
export function filterComboboxData(this: any, q: string, row: any, keys: string[] = []) {
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
    return false; // 明确返回false，增强代码的可读性
  }
}
import { convertObjectToQueryString } from '../../../../views_V2024/g-lobal'
describe('convertObjectToQueryString Function', () => {
  it('应将简单对象转换为查询字符串', () => {
    const obj = { key1: 'value1', key2: 'value2' };
    const expected = 'key1=value1&key2=value2';
    expect(convertObjectToQueryString(obj)).toBe(expected);
  });

  it('应正确处理数字和布尔值', () => {
    const obj = { numKey: 123, boolKey: true };
    const expected = 'numKey=123&boolKey=true';
    expect(convertObjectToQueryString(obj)).toBe(expected);
  });

  it('应忽略undefined和null值', () => {
    const obj = { key1: 'value1', keyNull: null, keyUndefined: undefined };
    const expected = 'key1=value1';
    expect(convertObjectToQueryString(obj)).toBe(expected);
  });

  it('应正确处理嵌套对象并进行JSON编码', () => {
    const obj = { nested: { key: 'nestedValue' } };
    const expected = 'nested=%7B%22key%22%3A%22nestedValue%22%7D';
    expect(convertObjectToQueryString(obj)).toBe(expected);
  });

  it('空对象应返回空字符串', () => {
    const obj = {};
    const expected = '';
    expect(convertObjectToQueryString(obj)).toBe(expected);
  });
});
import { encodeUrlParamValue } from '../../../../views_V2024/g-lobal/main'
describe('encodeUrlParamValue Function', () => {
  it('应正确编码字符串值', () => {
    const encodedValue = encodeUrlParamValue('你好，世界！');
    expect(encodedValue).toBe('%E4%BD%A0%E5%A5%BD%EF%BC%8C%E4%B8%96%E7%95%8C%EF%BC%81');
  });

  it('应将对象转换为JSON字符串并编码', () => {
    const obj = { key: '你好，Jest!' };
    const encodedObj = encodeUrlParamValue(obj);
    expect(encodedObj).toBe('%7B%22key%22%3A%22%E4%BD%A0%E5%A5%BD%EF%BC%8CJest!%22%7D');
  });

  it('给定 undefined 或 null 时，应返回空字符串', () => {
    expect(encodeUrlParamValue(undefined)).toBe('');
    expect(encodeUrlParamValue(null)).toBe('');
  });
});
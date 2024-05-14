import { getUrlParams } from '../../../../views_V2024/g-lobal'
describe('getUrlParams Function', () => {
  it('解析空URL时应返回空对象', () => {
    const url = new URL('http://example.com');
    expect(getUrlParams(null, url)).toEqual({});
  });

  it('解析URL无查询参数时应返回空对象', () => {
    const url = new URL('http://example.com/');
    expect(getUrlParams(null, url)).toEqual({});
  });

  it('解析单个查询参数并返回该参数值', () => {
    const url = new URL('http://example.com/?key1=value1');
    expect(getUrlParams('key1', url)).toBe('value1');
  });

  it('解析多个查询参数并返回指定键的值', () => {
    const url = new URL('http://example.com/?key1=value1&key2=value2');
    expect(getUrlParams('key2', url)).toBe('value2');
  });

  it('解析带有特殊字符的参数值', () => {
    const url = new URL('http://example.com/?key=special+value');
    expect(getUrlParams('key', url)).toBe('special+value');
  });

  it('未找到指定键时返回undefined', () => {
    const url = new URL('http://example.com/?key=value');
    expect(getUrlParams('nonExistentKey', url)).toBe(undefined);
  });

});
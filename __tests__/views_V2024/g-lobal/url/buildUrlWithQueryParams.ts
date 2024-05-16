import { setLoaction } from '../../../../__mocks__/location';
import { buildUrlWithQueryParams } from '../../../../views_V2024/g-lobal'
let href = 'http://example.com/zshis123/webs/some/path/index.html'
describe('buildUrlWithQueryParams Function', () => {
  beforeEach(() => setLoaction(href));
  afterEach(() => {
    // 确保每次测试后清理模拟，避免测试间互相影响
    jest.clearAllMocks();
  });
  it('应正确构建带有查询参数的URL', () => {
    const queryParams = { key1: 'value1', key2: 'value2' };
    const url = 'http://example.com/index.html';
    const expectedResult = 'http://example.com/index.html?key1=value1&key2=value2';
    expect(buildUrlWithQueryParams(queryParams, url)).toBe(expectedResult);
  });

  it('当URL为空时，应直接转换对象为查询字符串', () => {
    const queryParams = { key: 'value' };
    const expectedResult = 'key=value';
    expect(buildUrlWithQueryParams(queryParams)).toBe(expectedResult);
  });

  it('应忽略undefined和null值的参数', () => {
    const queryParams = { key1: 'value1', key2: undefined, key3: null };
    const url = 'http://example.com/index.html';
    const expectedResult = 'http://example.com/index.html?key1=value1';
    expect(buildUrlWithQueryParams(queryParams, url)).toBe(expectedResult);
  });

  it('应正确处理对象类型的值并进行JSON编码', () => {
    const queryParams = { data: { nestedKey: 'nestedValue' } };
    const url = 'http://example.com/index.html';
    const expectedResult = 'http://example.com/index.html?data=%257B%2522nestedKey%2522%253A%2522nestedValue%2522%257D';
    expect(buildUrlWithQueryParams(queryParams, url)).toBe(expectedResult);
  });

  it('输入为URL实例时，应正确处理', () => {
    const queryParams = { key: 'value' };
    const url = new URL('http://example.com/index.html');
    const expectedResult = 'http://example.com/index.html?key=value';
    expect(buildUrlWithQueryParams(queryParams, url)).toBe(expectedResult);
  });

  it('无参数对象时，若URL非空，则返回原URL；若URL为空，则返回空字符串', () => {
    const url = 'http://example.com/index.html';
    expect(buildUrlWithQueryParams({}, url)).toBe(url);
    expect(buildUrlWithQueryParams({}, '')).toBe('');
  });
});
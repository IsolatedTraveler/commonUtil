import { appendParamsToUrl } from '../../../../views_V2024/g-lobal/main'
describe('appendParamsToUrl Function', () => {
  it('正确添加简单键值对参数', () => {
    const params = { key1: 'value1', key2: 'value2' };
    const url = 'http://example.com/index.html';
    const expectedUrl = 'http://example.com/index.html?key1=value1&key2=value2';
    expect(appendParamsToUrl(params, url)).toBe(expectedUrl);
  });

  it('对已存在的参数值进行更新', () => {
    const params = { key: 'newValue' };
    const url = 'http://example.com/index.html?key=oldValue';
    const expectedUrl = 'http://example.com/index.html?key=newValue';
    expect(appendParamsToUrl(params, url)).toBe(expectedUrl);
  });

  it('正确处理对象类型的值并进行JSON编码', () => {
    const params = { data: { nestedKey: 'nestedValue' } };
    const url = 'http://example.com/index.html';
    const expectedUrl = 'http://example.com/index.html?data=%257B%2522nestedKey%2522%253A%2522nestedValue%2522%257D';
    expect(appendParamsToUrl(params, url)).toBe(expectedUrl);
  });

  it('当值为undefined或null时，不应添加到URL中', () => {
    const params = { emptyKey: '', undefinedKey: undefined };
    const url = 'http://example.com/index.html';
    const expectedUrl = 'http://example.com/index.html?emptyKey=';
    expect(appendParamsToUrl(params, url)).toBe(expectedUrl);
  });

  it('输入为URL实例时，应正确处理', () => {
    const params = { key: 'value' };
    const url = new URL('http://example.com/index.html');
    const expectedUrlString = 'http://example.com/index.html?key=value';
    expect(appendParamsToUrl(params, url)).toBe(expectedUrlString);
  });

  it('没有参数对象时，原URL应保持不变', () => {
    const url = 'http://example.com/index.html';
    const expectedUrl = url;
    expect(appendParamsToUrl({}, url)).toBe(expectedUrl);
  });
});
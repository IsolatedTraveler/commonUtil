import {setLoaction} from '../../../../__mocks__/location';
import {extractPrimaryUrl} from '../../../../views_V2024/g-lobal/main';

describe('extractPrimaryUrl Function', () => {
  let href: string;

  beforeEach(() => {
    // 设置window.location.href
    href = 'http://example.com/zshis123/webs/some/path/index.html';
    setLoaction(href);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('当提供单个字符串时，应直接返回该字符串', () => {
    expect(extractPrimaryUrl('http://test.com')).toBe('http://test.com');
  });

  it('若数组中有与当前页面起源匹配的URL，应返回该匹配的URL', () => {
    const urlsArray = ['http://other.com', 'http://other1.com', 'http://example.com/path', 'http://other2.com'];
    expect(extractPrimaryUrl(urlsArray)).toBe('http://example.com/path');
  });

  it('数组内无匹配项时，应返回数组的第一个URL', () => {
    const urlsArray = ['http://first.com', 'http://second.com'];
    expect(extractPrimaryUrl(urlsArray)).toBe('http://first.com');
  });

  it('接收空数组时，预期返回空字符串', () => {
    expect(extractPrimaryUrl([])).toBe('');
  });

  it('当数组为空字符串时，应返回空字符串', () => {
    expect(extractPrimaryUrl([''])).toBe('');
  });

  it('当数组中包含多个匹配当前页面起源的URL时，应返回第一个匹配的URL', () => {
    const urlsArray = ['http://example.com/path1', 'http://example.com/path2'];
    expect(extractPrimaryUrl(urlsArray)).toBe('http://example.com/path1');
  });

  it('当数组中包含当前页面起源的URL和空字符串时，应返回当前页面起源的URL', () => {
    const urlsArray = ['http://example.com/path', ''];
    expect(extractPrimaryUrl(urlsArray)).toBe('http://example.com/path');
  });

  it('当数组中第一个URL就是当前页面起源的URL时，应返回该URL', () => {
    const urlsArray = ['http://example.com/path', 'http://other.com/path'];
    expect(extractPrimaryUrl(urlsArray)).toBe('http://example.com/path');
  });

  it('当数组中最后一个URL是当前页面起源的URL时，应返回该URL', () => {
    const urlsArray = ['http://other.com/path', 'http://example.com/path'];
    expect(extractPrimaryUrl(urlsArray)).toBe('http://example.com/path');
  });
});

import {setLoaction} from '../../../../__mocks__/location';
import {extractPrimaryUrl} from '../../../../views_V2024/g-lobal/main';

let href: string;

describe('extractPrimaryUrl Function', () => {
  beforeEach(() => setLoaction(href));

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('当提供单个字符串时，应直接返回该字符串', () => {
    expect(extractPrimaryUrl('http://test.com')).toBe('http://test.com');
    href = 'http://example.com/zshis123/webs/some/path/index.html';
  });

  it('若数组中有与当前页面起源匹配的URL，应返回该匹配的URL', () => {
    const urlsArray = ['http://other.com', 'http://example.com/path'];
    expect(extractPrimaryUrl(urlsArray)).toBe('http://example.com/path');
    href = 'http://example.com/zshis123/webs/some/path/index.html';
  });

  it('数组内无匹配项时，应返回数组的第一个URL', () => {
    const urlsArray = ['http://first.com', 'http://second.com'];
    expect(extractPrimaryUrl(urlsArray)).toBe('http://first.com');
  });

  it('接收空数组时，预期返回空字符串', () => {
    expect(extractPrimaryUrl([])).toBe('');
    href = 'http://example.com/zshis123/webs/some/path/index.html';
  });

  it('当数组中所有URL都不包含当前页面起源时，应返回数组的第一个URL', () => {
    const urlsArray = ['http://other1.com', 'http://other2.com'];
    expect(extractPrimaryUrl(urlsArray)).toBe('http://other1.com');
  });

  it('当数组为空字符串时，应返回空字符串', () => {
    expect(extractPrimaryUrl([''])).toBe('');
    href = 'http://example.com/zshis123/webs/some/path/index.html';
  });

  it('当数组中包含空字符串和其他URL时，应返回非空字符串的URL', () => {
    const urlsArray = ['', 'http://example.com/path'];
    expect(extractPrimaryUrl(urlsArray)).toBe('http://example.com/path');
    href = 'http://example.com/zshis123/webs/some/path/index.html';
  });

  it('当数组中包含多个匹配当前页面起源的URL时，应返回第一个匹配的URL', () => {
    const urlsArray = ['http://example.com/path1', 'http://example.com/path2'];
    expect(extractPrimaryUrl(urlsArray)).toBe('http://example.com/path1');
    href = 'http://example.com/zshis123/webs/some/path/index.html';
  });

  it('当数组中包含当前页面起源的URL和空字符串时，应返回当前页面起源的URL', () => {
    const urlsArray = ['http://example.com/path', ''];
    expect(extractPrimaryUrl(urlsArray)).toBe('http://example.com/path');
  });
});

import { setLoaction } from '../../../../__mocks__/location';
import { extractPrimaryUrl } from '../../../../views_V2024/g-lobal/main'
let href: string
describe('extractPrimaryUrl Function', () => {
  beforeEach(() => setLoaction(href));
  afterEach(() => {
    // 确保每次测试后清理模拟，避免测试间互相影响
    jest.clearAllMocks();
  });
  it('当提供单个字符串时，应直接返回该字符串', () => {
    expect(extractPrimaryUrl('http://test.com')).toBe('http://test.com');
    href = 'http://example.com/zshis123/webs/some/path/index.html'
  });

  it('若数组中有与当前页面起源匹配的URL，应返回该匹配的URL', () => {
    const urlsArray = ['http://other.com', 'http://example.com/path'];
    expect(extractPrimaryUrl(urlsArray)).toBe('http://example.com/path');
  });

  it('数组内无匹配项时，应返回数组的第一个URL', () => {
    const urlsArray = ['http://first.com', 'http://second.com'];
    expect(extractPrimaryUrl(urlsArray)).toBe('http://first.com');
  });

  it('接收空数组时，预期返回空字符串', () => {
    expect(extractPrimaryUrl([])).toBe('');
  });
});
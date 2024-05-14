import { extractPrimaryUrl } from '../../../../views_V2024/g-lobal/main'
let href = 'http://example.com/zshis123/webs/some/path/index.html'
describe('extractPrimaryUrl Function', () => {
  beforeEach(() => {
    // 重置所有可能影响后续测试的模拟
    jest.restoreAllMocks();
    jest.resetAllMocks();
    // 确保location.href在每个测试开始前都被重置
    Object.defineProperty(window, 'location', {
      value: { href: href, origin: 'http://example.com' }, // 或者设置一个默认值，如果需要的话
      writable: true
    });
  });
  afterEach(() => {
    // 确保每次测试后清理模拟，避免测试间互相影响
    jest.clearAllMocks();
  });
  it('当提供单个字符串时，应直接返回该字符串', () => {
    expect(extractPrimaryUrl('http://test.com')).toBe('http://test.com');
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
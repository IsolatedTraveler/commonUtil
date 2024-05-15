import { buildAbsoluteUrl } from '../../../../views_V2024/g-lobal'
import { setAppBaseUrl } from '../../../../views_V2024/g-lobal/main'
let href = 'http://example.com/zshis123/webs/some/path/index.html'
describe('getAppBaseUrl Function', () => {
  beforeEach(() => {
    // 重置所有可能影响后续测试的模拟
    jest.restoreAllMocks();
    jest.resetAllMocks();
    // 确保location.href在每个测试开始前都被重置
    Object.defineProperty(window, 'location', {
      value: { href: href }, // 或者设置一个默认值，如果需要的话
      writable: true
    });
    setAppBaseUrl()
  });
  afterEach(() => {
    // 确保每次测试后清理模拟，避免测试间互相影响
    jest.clearAllMocks();
  });
  it('给定已为绝对URL时，应直接返回该URL', () => {
    const absoluteUrl = 'https://example.com/path';
    expect(buildAbsoluteUrl(absoluteUrl)).toBe(absoluteUrl);
  });
  it('未指定URL类型时，应将相对URL转换为基于应用基础URL的绝对URL', () => {
    const relativePath = './relative/path';
    const result = buildAbsoluteUrl(relativePath);
    expect(result).toBe('http://192.168.0.242:8080/jtphis/relative/path');
  });
  it('未指定URL类型时，应将相对URL转换为基于应用基础URL的绝对URL', () => {
    const relativePath = 'relative/path';
    const result = buildAbsoluteUrl(relativePath);
    expect(result).toBe('http://192.168.0.242:8080/jtphis/relative/path');
  });
  it('未指定URL类型时，应将相对URL转换为基于应用基础URL的绝对URL', () => {
    const relativePath = '/relative/path';
    const result = buildAbsoluteUrl(relativePath);
    expect(result).toBe('http://192.168.0.242:8080/relative/path');
  });
  it('能正确处理包含"../"的相对路径，返回正确的绝对URL', () => {
    const relativePathWithParentRef = '../parent/path';
    const result = buildAbsoluteUrl(relativePathWithParentRef);
    expect(result).toBe('http://192.168.0.242:8080/parent/path');
  });
  it('指定URL类型为"origin"时，应将相对URL转换为基于服务器URL的绝对URL', () => {
    const relativePath = './another/path';
    const result = buildAbsoluteUrl(relativePath, 'origin'); // 注意这里的参数应与实际函数签名匹配，之前示例中可能有误
    expect(result).toBe('http://example.com/zshis123/another/path');
  });
  it('指定URL类型为"origin"时，应将相对URL转换为基于服务器URL的绝对URL', () => {
    const relativePath = 'another/path';
    const result = buildAbsoluteUrl(relativePath, 'origin'); // 注意这里的参数应与实际函数签名匹配，之前示例中可能有误
    expect(result).toBe('http://example.com/zshis123/another/path');
  });
  it('指定URL类型为"origin"时，应将相对URL转换为基于服务器URL的绝对URL', () => {
    const relativePath = '../another/path';
    const result = buildAbsoluteUrl(relativePath, 'origin'); // 注意这里的参数应与实际函数签名匹配，之前示例中可能有误
    expect(result).toBe('http://example.com/another/path');
  });
  it('指定URL类型为"origin"时，应将相对URL转换为基于服务器URL的绝对URL', () => {
    const relativePath = '/another/path';
    const result = buildAbsoluteUrl(relativePath, 'origin'); // 注意这里的参数应与实际函数签名匹配，之前示例中可能有误
    expect(result).toBe('http://example.com/another/path');
  });
});
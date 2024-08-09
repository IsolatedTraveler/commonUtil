import { setLoaction } from '../../../../__mocks__/location';
import { appBaseUrl, setAppBaseUrl } from '../../../../views_V2024/g-lobal/main'
let href: string | false = 'http://example.com/zshis/webs/some123/path/index.html'
describe('setAppBaseUrl Function', () => {
  beforeEach(() => setLoaction(href));
  afterEach(() => {
    // 确保每次测试后清理模拟，避免测试间互相影响
    jest.clearAllMocks();
  });
  it('应正确获取基础URL，当URL包含特定前缀时', () => {
    href = 'http://example.com/webs/another123/path/to/page.html'
    expect(appBaseUrl).toBe('http://example.com/zshis/');
  });
  it('应正确获取基础URL，当URL不包含特定前缀时', () => {
    href = false
    expect(appBaseUrl).toBe('http://example.com/');
  });
  it('当URL为空时返回空', () => {
    expect(setAppBaseUrl()).toBe('');
  });
});
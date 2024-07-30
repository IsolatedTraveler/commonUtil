import { setLoaction } from '../../../../__mocks__/location';
import { getAppBaseUrl } from '../../../../views_V2024/g-lobal'
let href: string
describe('getAppBaseUrl Function', () => {
  beforeEach(() => setLoaction(href));
  afterEach(() => {
    // 确保每次测试后清理模拟，避免测试间互相影响
    jest.clearAllMocks();
  });
  it('应正确获取基础URL，当URL包含特定前缀时', () => {
    const result = getAppBaseUrl()
    expect(result).toBe('http://127.0.0.1:8020/his-flie/sc/');
    href = 'http://example.com/webs/another/path/to/page.html'
  });
  it('应正确获取基础URL，当URL不包含特定前缀时', () => {
    const result = getAppBaseUrl()
    expect(result).toBe('http://example.com/');
  });
});
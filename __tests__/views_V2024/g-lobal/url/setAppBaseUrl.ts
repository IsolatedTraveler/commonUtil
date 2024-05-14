import { setAppBaseUrl } from '../../../../views_V2024/g-lobal/main'
let href = 'http://example.com/zshis/webs/some/path/index.html'
describe('setAppBaseUrl Function', () => {
  beforeEach(() => {
    // 重置所有可能影响后续测试的模拟
    jest.restoreAllMocks();
    jest.resetAllMocks();
    // 确保location.href在每个测试开始前都被重置
    Object.defineProperty(window, 'location', {
      value: { href: href }, // 或者设置一个默认值，如果需要的话
      writable: true
    });
  });
  afterEach(() => {
    // 确保每次测试后清理模拟，避免测试间互相影响
    jest.clearAllMocks();
  });
  it('应正确获取基础URL，当URL包含特定前缀时', () => {
    href = 'http://example.com/webs/another/path/to/page.html'
    expect(setAppBaseUrl()).toBe('http://example.com/zshis');
  });
  it('应正确获取基础URL，当URL不包含特定前缀时', () => {
    expect(setAppBaseUrl()).toBe('http://example.com');
  });
});
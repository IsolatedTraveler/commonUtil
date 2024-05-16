import { getUrl } from '../../../../views_V2024/g-lobal/main'
describe('getUrl Function', () => {
  it('当输入为 URL 对象时，应返回相同的 URL 对象', () => {
    const urlObj = new URL('https://example.com');
    expect(getUrl(urlObj)).toBe(urlObj);
  });
  // 输入为 Location 对象的测试（注意实际执行环境）
  it('当输入为 Location 对象时，应返回相同的 Location 对象', () => {
    expect(getUrl(window.location)).toBe(window.location);
  });
  // 输入为有效字符串 URL 的测试
  it('当输入为有效字符串 URL 时，应返回对应的 URL 对象', () => {
    const urlString = 'https://example.com/path';
    const urlResult = getUrl(urlString);
    expect(urlResult instanceof URL).toBe(true);
    expect(urlResult.href).toBe(urlString);
  });
  // 输入为无效字符串的测试
  it('当输入为无效字符串时，应记录错误并返回当前页面位置', () => {
    const spy = jest.spyOn(console, 'error').mockImplementation();
    const invalidUrlString = 'not-a-valid-url';
    const result = getUrl(invalidUrlString);
    expect(spy).toHaveBeenCalledWith('Invalid URL:', invalidUrlString);
    expect(result).toBe(window.location); // 或使用global.location在Node环境下模拟
    spy.mockRestore(); // 清除mock
  });
  // 无输入参数的测试
  it('无输入参数时，应返回当前页面位置', () => {
    const result = getUrl();
    expect(result).toBe(window.location); // 或使用global.location在Node环境下模拟
  });
});
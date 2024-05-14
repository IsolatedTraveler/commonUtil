import { parseUrlOrDefault } from '../../../../views_V2024/g-lobal/main'
describe('parseUrlOrDefault Function', () => {
  it('对于有效的URL字符串，应返回URL对象', () => {
    const url = 'https://www.example.com';
    const parsedUrl = parseUrlOrDefault(url);
    expect(parsedUrl instanceof URL).toBeTruthy();
    expect(parsedUrl.href).toBe(url + '/');
  });

  it('对于无效的URL字符串，应记录错误并返回当前页面的Location对象', () => {
    const spy = jest.spyOn(console, 'error').mockImplementation(); // 捕获并模拟错误日志
    const invalidUrl = 'invalid-url-string';
    const result = parseUrlOrDefault(invalidUrl);
    expect(spy).toHaveBeenCalledWith('无效的URL:', invalidUrl);
    expect(result).toBe(window.location); // 假设运行环境为浏览器，否则需相应调整
    spy.mockRestore(); // 清除日志模拟
  });

  it('传入URL实例时，直接返回该实例', () => {
    const urlInstance = new URL('https://www.example.com');
    expect(parseUrlOrDefault(urlInstance)).toBe(urlInstance);
  });

  it('传入Location对象时，直接返回该对象', () => {
    // 这里直接使用全局的location对象进行测试
    expect(parseUrlOrDefault(window.location)).toBe(window.location);
  });

  it('对于非预期类型的输入，默认返回当前页面的Location对象', () => {
    const result = parseUrlOrDefault({} as any); // 假定的非预期输入
    expect(result).toBe(window.location);
  });
});
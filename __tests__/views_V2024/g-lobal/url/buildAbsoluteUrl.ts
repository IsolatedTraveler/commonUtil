import { setLoaction } from '../../../../__mocks__/location';
import { buildAbsoluteUrl } from '../../../../views_V2024/g-lobal'
import { appBaseUrl } from '../../../../views_V2024/main';
describe('buildAbsoluteUrl Function', () => {
  beforeEach(() => setLoaction());
  afterEach(() => {
    // 确保每次测试后清理模拟，避免测试间互相影响
    jest.clearAllMocks();
  });
  it('给定已为绝对URL时，应直接返回该URL', () => {
    const absoluteUrl = 'https://example.com/path';
    expect(buildAbsoluteUrl(absoluteUrl)).toBe(absoluteUrl);
  });
  it('未指定URL类型时，能正确处理包含"./"的相对路径', () => {
    const relativePath = './relative/path';
    const result = buildAbsoluteUrl(relativePath);
    expect(appBaseUrl).toBe('http://127.0.0.1:8020/his-flie/sc/');
    expect(result).toBe('http://127.0.0.1:8020/his-flie/sc/relative/path');
  });
  it('未指定URL类型时，能正确处理包含""的相对路径', () => {
    const relativePath = 'relative/path';
    const result = buildAbsoluteUrl(relativePath);
    expect(result).toBe('http://127.0.0.1:8020/his-flie/sc/relative/path');
  });
  it('未指定URL类型时，能正确处理包含"/"的相对路径', () => {
    const relativePath = '/relative/path';
    const result = buildAbsoluteUrl(relativePath);
    expect(result).toBe('http://127.0.0.1:8020/relative/path');
  });
  it('未指定URL类型时，能正确处理包含"../"的相对路径', () => {
    const relativePathWithParentRef = '../parent/path';
    const result = buildAbsoluteUrl(relativePathWithParentRef);
    expect(result).toBe('http://127.0.0.1:8020/his-flie/parent/path');
  });
  it('指定URL类型为"origin"时，能正确处理包含"./"的相对路径', () => {
    const relativePath = './another/path';
    const result = buildAbsoluteUrl(relativePath, 'origin'); // 注意这里的参数应与实际函数签名匹配，之前示例中可能有误
    expect(result).toBe('http://127.0.0.1:8020/his-flie/sc/another/path');
  });
  it('指定URL类型为"origin"时，能正确处理包含""的相对路径', () => {
    const relativePath = 'another/path';
    const result = buildAbsoluteUrl(relativePath, 'origin'); // 注意这里的参数应与实际函数签名匹配，之前示例中可能有误
    expect(result).toBe('http://127.0.0.1:8020/his-flie/sc/another/path');
  });
  it('指定URL类型为"origin"时，能正确处理包含"../"的相对路径', () => {
    const relativePath = '../another/path';
    const result = buildAbsoluteUrl(relativePath, 'origin'); // 注意这里的参数应与实际函数签名匹配，之前示例中可能有误
    expect(result).toBe('http://127.0.0.1:8020/his-flie/another/path');
  });
  it('指定URL类型为"origin"时，能正确处理包含"/"的相对路径', () => {
    const relativePath = '/another/path';
    const result = buildAbsoluteUrl(relativePath, 'origin'); // 注意这里的参数应与实际函数签名匹配，之前示例中可能有误
    expect(result).toBe('http://127.0.0.1:8020/another/path');
  });
  it('指定URL类型为"local"时，能正确处理包含"./"的相对路径', () => {
    const relativePath = './another/path';
    const result = buildAbsoluteUrl(relativePath, 'local'); // 注意这里的参数应与实际函数签名匹配，之前示例中可能有误
    expect(result).toBe('http://127.0.0.1:8020/his-flie/sc/webs/another/path');
  });
  it('指定URL类型为"local"时，能正确处理包含""的相对路径', () => {
    const relativePath = 'another/path';
    const result = buildAbsoluteUrl(relativePath, 'local'); // 注意这里的参数应与实际函数签名匹配，之前示例中可能有误
    expect(result).toBe('http://127.0.0.1:8020/his-flie/sc/webs/another/path');
  });
  it('指定URL类型为"local"时，能正确处理包含"../"的相对路径', () => {
    const relativePath = '../another/path';
    const result = buildAbsoluteUrl(relativePath, 'local'); // 注意这里的参数应与实际函数签名匹配，之前示例中可能有误
    expect(result).toBe('http://127.0.0.1:8020/his-flie/sc/another/path');
  });
  it('指定URL类型为"local"时，能正确处理包含"/"的相对路径', () => {
    const relativePath = '/another/path';
    const result = buildAbsoluteUrl(relativePath, 'local'); // 注意这里的参数应与实际函数签名匹配，之前示例中可能有误
    expect(result).toBe('http://127.0.0.1:8020/another/path');
  });
});
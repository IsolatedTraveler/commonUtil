import { convertToAbsoluteUrl } from '../../../../views_V2024/g-lobal/main'
describe('convertToAbsoluteUrl Function', () => {
  it('如果URL已经是绝对的，则应返回相同的URL', () => {
    const url = 'https://example.com/images/profile.jpg';
    expect(convertToAbsoluteUrl(url)).toBe(url);
  });

  it('对相对URL进行处理，并以其相对于基础URL的路径解析', () => {
    const baseUrl = 'https://example.com/path/to/page/';
    const relativeUrl = '../img/logo.png';
    const expected = 'https://example.com/path/to/img/logo.png';
    expect(convertToAbsoluteUrl(relativeUrl, baseUrl)).toBe(expected);
  });

  it('正确处理指向根目录的引用', () => {
    const baseUrl = 'https://example.com/some/deep/path/';
    const relativeUrl = '/css/style.css';
    const expected = 'https://example.com/css/style.css';
    expect(convertToAbsoluteUrl(relativeUrl, baseUrl)).toBe(expected);
  });
});
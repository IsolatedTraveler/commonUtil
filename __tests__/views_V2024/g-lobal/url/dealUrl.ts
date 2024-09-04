import {dealUrl} from '../../../../views_V2024/main';

describe('dealUrl function', () => {
  it('should append the path directly when it ends with a slash', () => {
    const base = 'https://example.com';
    const path = '/api/v1/';
    const expected = 'https://example.com/api/v1/';
    const result = dealUrl(base, path);
    expect(result).toBe(expected);
  });

  it('should append the path directly when it has an extension', () => {
    const base = 'https://example.com';
    const path = '/api/v1/data.json';
    const expected = 'https://example.com/api/v1/data.json';
    const result = dealUrl(base, path);
    expect(result).toBe(expected);
  });

  it('should append a trailing slash to the path when it lacks one and an extension', () => {
    const base = 'https://example.com';
    const path = '/api/v1/data';
    const expected = 'https://example.com/api/v1/data/';
    const result = dealUrl(base, path);
    expect(result).toBe(expected);
  });

  it('should handle an empty path by appending a slash', () => {
    const base = 'https://example.com';
    const path = '';
    const expected = 'https://example.com/';
    const result = dealUrl(base, path);
    expect(result).toBe(expected);
  });

  it('should handle a path that is just a slash', () => {
    const base = 'https://example.com';
    const path = '/';
    const expected = 'https://example.com/';
    const result = dealUrl(base, path);
    expect(result).toBe(expected);
  });

  it('should handle a path with multiple slashes at the end', () => {
    const base = 'https://example.com';
    const path = '/api/v1//';
    const expected = 'https://example.com/api/v1//';
    const result = dealUrl(base, path);
    expect(result).toBe(expected);
  });
});

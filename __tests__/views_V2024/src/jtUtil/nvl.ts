import { nvl } from '../../../../views_V2024/main'
describe('nvl function', () => {
  it('should return the default value when input is null', () => {
    const result = nvl(null, 'default');
    expect(result).toBe('default');
  });

  it('should return the default value when input is undefined', () => {
    const result = nvl(undefined, 'default');
    expect(result).toBe('default');
  });

  it('should return the empty string as default when no second argument is provided', () => {
    const result = nvl(null);
    expect(result).toBe('');
  });

  it('should return the default value when input is the string "null"', () => {
    const result = nvl('null', 'default');
    expect(result).toBe('default');
  });

  it('should return the default value when input is the string "null"', () => {
    const result = nvl('null');
    expect(result).toBe('');
  });

  it('should return the input when it is a non-zero number', () => {
    const result = nvl(5);
    expect(result).toBe(5);
  });

  it('should return the input when it is zero', () => {
    const result = nvl(0);
    expect(result).toBe(0);
  });

  it('should return the input when it is a string', () => {
    const result = nvl('hello');
    expect(result).toBe('hello');
  });
});
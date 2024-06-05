import { tableReload } from '../../../../views_V2024/main'
describe('tableReload function', () => {
  it('should return correct reload parameters with only data', () => {
    const result = tableReload([{ id: 1, name: 'Test' }]);
    expect(result).toEqual({ data: [{ id: 1, name: 'Test' }] });
  });

  it('should include count when provided', () => {
    const result = tableReload([], 100);
    expect(result).toHaveProperty('count', 100);
  });
  it('should include count when provided', () => {
    const result = tableReload(null, 100);
    expect(result).toHaveProperty('count', 100);
  });

  it('should construct page object when page parameter is provided', () => {
    const result = tableReload([], undefined, { page: 2, size: 50 });
    expect(result).toHaveProperty('page', { count: undefined, curr: 2, limit: 50 });
  });
  it('should set default limit to 20 when page size is not provided', () => {
    const result = tableReload([], undefined, { page: 2 });
    expect(result).toHaveProperty('page', { count: undefined, curr: 2, limit: 20 });
  });

  it('should override default limit when both page and count are provided', () => {
    const result = tableReload([], 250, { page: 3, size: 75 });
    expect(result).toEqual({
      data: [],
      count: 250,
      page: { count: 250, curr: 3, limit: 75 }
    });
  });
});
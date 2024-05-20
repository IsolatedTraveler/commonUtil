import { LayuiPage, getTablePageSize } from '../../../views_V2024/main'
describe('getTablePageSize Function', () => {
  it('should return default page size when no parameter is provided', () => {
    expect(getTablePageSize()).toBe(20);
  });

  it('should return default page size when boolean true is provided', () => {
    expect(getTablePageSize(true)).toBe(20);
  });

  it('should return the limit property of the provided object when it exists', () => {
    const customLimit = 50;
    const page = { limit: customLimit } as LayuiPage;
    expect(getTablePageSize(page)).toBe(customLimit);
  });

  it('should return default page size when limit property is not present in the object', () => {
    const page = {} as LayuiPage;
    expect(getTablePageSize(page)).toBe(20);
  });
});
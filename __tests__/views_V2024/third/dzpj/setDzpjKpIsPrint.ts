import { setDzpjKpIsPrint, dzpjKpIsPrint } from '../../../../views_V2024/main'
describe('setDzpjKpIsPrint function', () => {
  it('should set the value to "是" when passed "是"', () => {
    setDzpjKpIsPrint('是');
    expect(dzpjKpIsPrint).toBe('是');
  });

  it('should set the value to "否" when passed "否"', () => {
    setDzpjKpIsPrint('否');
    expect(dzpjKpIsPrint).toBe('否');
  });

  it('should set the value to "提示" when passed "提示"', () => {
    setDzpjKpIsPrint('提示');
    expect(dzpjKpIsPrint).toBe('提示');
  });
});
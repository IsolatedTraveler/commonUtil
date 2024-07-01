import { setDzpjKpSync, dzpjKpSync } from '../../../../views_V2024/main'
describe('setDzpjKpIsPrint function', () => {
  it('should set dzpjKpSync to true when passed true', () => {
    setDzpjKpSync(true);
    expect(dzpjKpSync).toBe(true);
  });

  it('should set dzpjKpSync to false when passed false', () => {
    setDzpjKpSync(false);
    expect(dzpjKpSync).toBe(false);
  });
});
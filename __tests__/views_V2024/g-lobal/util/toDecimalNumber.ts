import { toDecimalNumber } from '../../../../views_V2024/g-lobal'
describe('toDecimalNumber Function', () => {
  it('处理数字并按默认精度四舍五入', () => {
    expect(toDecimalNumber(123.456789)).toBe('123.46');
  });

  it('处理字符串数字并按指定精度四舍五入', () => {
    expect(toDecimalNumber('123.456789', 3)).toBe('123.457');
  });

  it('当输入为非数字字符串时，应直接返回原字符串', () => {
    expect(toDecimalNumber('abc')).toBe('abc');
  });

  it('当输入为 Infinity 时，直接返回 Infinity', () => {
    expect(toDecimalNumber(Infinity)).toBe('Infinity');
    expect(toDecimalNumber(-Infinity)).toBe('-Infinity');
  });

  it('当输入为整数且未指定精度时，按默认精度小数位补0', () => {
    expect(toDecimalNumber(123)).toBe('123.00');
  });

  it('当精度为0时，应返回整数部分', () => {
    expect(toDecimalNumber(123.456, 0)).toBe('123');
  });

  it('当精度为负数时，返回原值', () => {
    expect(toDecimalNumber(123.456, -1)).toBe(123.456); // 实际应用中可能需要考虑如何处理负精度的情况
  });
});
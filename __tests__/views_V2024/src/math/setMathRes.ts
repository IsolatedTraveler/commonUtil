import { setMathRes, mathRes, mathBigRes, decimalPlaces } from '../../../../views_V2024/main'
describe('setMathRes Function', () => {
  // 测试正数情况
  it('正数输入应该正确设置mathRes和mathBigRes', () => {
    setMathRes(BigInt(123), 1, 0.12);
    expect(mathRes).toBe(12.312);
    expect(mathBigRes.toString()).toBe('12312');
    expect(decimalPlaces).toBe(3);
  });

  // 测试负数情况
  it('负数输入应该正确设置mathRes和mathBigRes', () => {
    setMathRes(BigInt(-12345), 6, 0.678);
    expect(mathRes).toBe(-0.012345678);
    expect(mathBigRes.toString()).toBe('-12345678');
    expect(decimalPlaces).toBe(9);
  });

  // 测试小数位数超出情况
  it('小数位数超出应该正确设置mathRes和mathBigRes', () => {
    setMathRes(BigInt(12345), 4, 0.123456);
    expect(mathRes).toBe(1.2345123456);
    expect(mathBigRes.toString()).toBe('12345123456');
    expect(decimalPlaces).toBe(10);
  });

  // 测试整数部分长度不足补零情况
  it('整数部分长度不足时，应该正确补零并设置mathRes和mathBigRes', () => {
    setMathRes(BigInt(123), 5);
    expect(mathRes).toBe(0.00123);
    expect(mathBigRes.toString()).toBe('123');
    expect(decimalPlaces).toBe(5);
  });
});
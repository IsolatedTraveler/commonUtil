import { toFixed, mathInit } from '../../../../views_V2024/main'

describe('toFixed Function', () => {

  // 测试默认保留两位小数
  it('应该返回保留两位小数的字符串', () => {
    mathInit(123.456789);
    const result = toFixed();
    expect(result).toBe('123.46'); // 默认保留两位小数
  });

  // 测试指定小数位数
  it('应该返回指定小数位数的字符串', () => {
    mathInit(123.456789);
    const result = toFixed(4);
    expect(result).toBe('123.4568'); // 保留四位小数
  });

  // 测试负数情况下保留小数位数
  it('对于负数，应该正确地保留指定的小数位数', () => {
    mathInit(-123.456);
    const result = toFixed(3);
    expect(result).toBe('-123.456'); // 保留三位小数
  });

  // 测试整数情况下保留小数位数
  it('对于整数，应该在末尾添加零以满足指定的小数位数', () => {
    mathInit(123);
    const result = toFixed(3);
    expect(result).toBe('123.000'); // 整数情况下，末尾添加零
  });

});
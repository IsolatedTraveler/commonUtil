import { reSubtract, mathRes, mathBigRes, mathInit } from '../../../../views_V2024/main'

describe('reSubtract Function', () => {

  // 测试从整数中减去当前值
  it('应该能正确地从整数中减去当前值', () => {
    mathInit(10)
    reSubtract(20); // 从20中减去10
    expect(mathRes).toBe(10); // 结果应为10
    expect(mathBigRes.toString()).toBe('10');
  });

  // 测试从字符串表示的数字中减去当前值
  it('应该能正确地从字符串表示的数字中减去当前值', () => {
    mathInit(5)
    reSubtract('15'); // 从15中减去5
    expect(mathRes).toBe(10); // 结果应为10
    expect(mathBigRes.toString()).toBe('10');
  });

  // 测试从大整数中减去当前值
  it('应该能正确地从大整数中减去当前值', () => {
    mathInit(100)
    reSubtract(BigInt(1000000000000)); // 从1000000000000中减去100
    expect(mathRes).toBe(999999999900); // 结果应为999999999900
    expect(mathBigRes.toString()).toBe('999999999900');
  });

  // 测试从正数中减去正数
  it('当从正数中减去正数时，结果应该是正确的', () => {
    mathInit(5)
    reSubtract(10); // 从10中减去5
    expect(mathRes).toBe(5); // 结果应为5
    expect(mathBigRes.toString()).toBe('5');
  });

  // 测试从负数中减去正数
  it('当从负数中减去正数时，结果应该是正确的', () => {
    mathInit(-5)
    reSubtract(10); // 从10中减去-5
    expect(mathRes).toBe(15); // 结果应为15
    expect(mathBigRes.toString()).toBe('15');
  });

});
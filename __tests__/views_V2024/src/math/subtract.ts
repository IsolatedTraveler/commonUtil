import { subtract, mathRes, mathBigRes, mathInit } from '../../../../views_V2024/main'
describe('subtract Function', () => {
  // 测试从当前值减去整数
  it('应该能正确地从当前值减去一个整数', () => {
    mathInit(0)
    subtract(10); // 假设mathRes初始化为0
    expect(mathRes).toBe(-10); // mathRes应为-10
    expect(mathBigRes.toString()).toBe('-10');

    subtract(5); // 再次减去5
    expect(mathRes).toBe(-15); // mathRes应为-15
    expect(mathBigRes.toString()).toBe('-15');
  });

  // 测试从当前值减去字符串表示的数字
  it('应该能正确地从当前值减去字符串表示的数字', () => {
    mathInit(0)
    subtract('20'); // 假设mathRes初始化为0
    expect(mathRes).toBe(-20); // mathRes应为-20
    expect(mathBigRes.toString()).toBe('-20');

    subtract('3'); // 再次减去3
    expect(mathRes).toBe(-23); // mathRes应为-23
    expect(mathBigRes.toString()).toBe('-23');
  });

  // 测试从当前值减去大整数
  it('应该能正确地从当前值减去一个大整数', () => {
    mathInit(0)
    subtract(BigInt(1000000000000)); // 假设mathRes初始化为0
    expect(mathRes).toBe(-1000000000000); // mathRes应为-1000000000000
    expect(mathBigRes.toString()).toBe('-1000000000000');
  });

  // 测试从正数减去正数
  it('当从正数减去正数时，结果应该是正确的', () => {
    mathInit(10)
    subtract(5); // 假设mathRes初始化为10
    expect(mathRes).toBe(5); // mathRes应为5
    expect(mathBigRes.toString()).toBe('5');
  });

  // 测试从负数减去正数
  it('当从负数减去正数时，结果应该是正确的', () => {
    mathInit(-5)
    subtract(10); // 假设mathRes初始化为-5
    expect(mathRes).toBe(-15); // mathRes应为-15
    expect(mathBigRes.toString()).toBe('-15');
  });
});
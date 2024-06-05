import { multiply, mathRes, mathBigRes, mathInit } from '../../../../views_V2024/main'
describe('multiply Function', () => {
  // 测试乘法操作
  it('应该正确执行乘法操作', () => {
    mathInit(1)
    multiply(10); // 尝试乘以10
    expect(mathRes).toBe(10);
    expect(mathBigRes.toString()).toBe('10');

    multiply('2.5'); // 再次乘以2.5
    expect(mathRes).toBe(25);
    expect(mathBigRes.toString()).toBe('25');
  });

  // 测试小数乘法操作
  it('应该正确处理小数乘法', () => {
    mathInit(1)
    multiply(2); // 尝试乘以2
    expect(mathRes).toBe(2);
    expect(mathBigRes.toString()).toBe('2');

    multiply(0.125); // 再次乘以0.125
    expect(mathRes).toBeCloseTo(0.25, 2);
    expect(mathBigRes.toString()).toBe('25');
  });

  // 测试乘以BigInt的情况
  it('应该正确处理乘以BigInt的情况', () => {
    mathInit(1)
    multiply(BigInt(1000000000)); // 尝试乘以1000000000
    expect(mathRes).toBe(1000000000);
    expect(mathBigRes.toString()).toBe('1000000000');
  });
});
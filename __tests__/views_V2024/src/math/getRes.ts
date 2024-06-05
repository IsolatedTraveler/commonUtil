import { getRes, mathRes, mathBigRes, mathInit, setMathRes } from '../../../../views_V2024/main'
describe('getRes Function', () => {
  // 测试默认情况下返回的值
  it('应该返回当前的计算结果', () => {
    expect(getRes()).toBe(0); // 应该返回0，因为mathRes被初始化为0
  });

  // 测试更改mathRes后的返回值
  it('应该返回更新后的计算结果', () => {
    setMathRes(BigInt(123456), 3)// 更新mathRes的值
    expect(getRes()).toBe(123.456); // 应该返回更新后的值
  });

  // 测试小数计算结果的返回
  it('应该正确返回小数计算结果', () => {
    setMathRes(BigInt(123456), 6)// 更新mathRes的值
    expect(getRes()).toBe(0.123456); // 应该返回小数值
  });

  // 测试负数计算结果的返回
  it('应该正确返回负数计算结果', () => {
    setMathRes(BigInt(-123456), 3)// 更新mathRes的值
    expect(getRes()).toBe(-123.456); // 应该返回负数值
  });
});
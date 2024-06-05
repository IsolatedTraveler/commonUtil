import { reDivide, mathRes, mathBigRes, mathInit, decimalPlaces } from '../../../../views_V2024/main'

describe('reDivide Function', () => {
  // 测试除法操作
  it('应该正确执行除法操作', () => {
    mathInit(10); // 初始化mathRes为10，decimalPlaces为0
    reDivide(100); // 尝试被10除
    expect(mathRes).toBe(10); // mathRes应为10
    expect(mathBigRes.toString()).toBe('10'); // mathBigRes应为10

    reDivide(25); // 再次尝试被10除
    expect(mathRes).toBe(2.5); // mathRes应为2.5
    expect(mathBigRes.toString()).toBe('25'); // mathBigRes应为25，考虑到decimalPlaces
    expect(decimalPlaces).toBe(1); // 确认decimalPlaces的值
  });

  // 测试小数除法操作
  it('应该正确处理小数除法', () => {
    mathInit(2); // 初始化mathRes为2，decimalPlaces为0
    reDivide(4); // 尝试被2除
    expect(mathRes).toBe(2); // mathRes应为2
    expect(mathBigRes.toString()).toBe('2'); // mathBigRes应为2

    reDivide(0.5); // 再次尝试被2除
    expect(mathRes).toBe(0.25); // mathRes应为0.25
    expect(mathBigRes.toString()).toBe('25'); // mathBigRes应为25，考虑到decimalPlaces
    expect(decimalPlaces).toBe(2); // 确认decimalPlaces的值
  });

  // 测试除以BigInt的情况
  it('应该正确处理除以BigInt的情况', () => {
    mathInit(1000000000); // 初始化mathRes为1000000000，decimalPlaces为0
    reDivide(BigInt(1000000000000)); // 尝试被1000000000除
    expect(mathRes).toBe(1000); // mathRes应为1000
    expect(mathBigRes.toString()).toBe('1000'); // mathBigRes应为1000
  });
});
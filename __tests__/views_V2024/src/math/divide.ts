import { divide, mathRes, mathBigRes, mathInit, decimalPlaces } from '../../../../views_V2024/main'
describe('divide Function', () => {
  // 测试整数除法操作
  it('应该正确执行整数除法操作', () => {
    divide(100); // 尝试除以100
    expect(mathRes).toBe(0); // mathRes初始为0，除以100仍然为0
    expect(mathBigRes.toString()).toBe('0');
    mathInit(100); // 初始化mathRes为100
    divide(10); // 尝试除以10
    expect(mathRes).toBe(10); // mathRes应为10
    expect(mathBigRes.toString()).toBe('10'); // mathBigRes应为10

    divide(4); // 再次尝试除以4
    expect(mathRes).toBe(2.5); // mathRes应为2.5
    expect(mathBigRes.toString()).toBe('25'); // mathBigRes应为25，考虑到decimalPlaces
    expect(decimalPlaces).toBe(1); // 确认decimalPlaces的值
  });

  // 测试小数除法操作
  it('应该正确处理小数除法', () => {
    mathInit(4); // 初始化mathRes为4
    divide(2); // 尝试除以2
    expect(mathRes).toBe(2); // mathRes应为2
    expect(mathBigRes.toString()).toBe('2'); // mathBigRes应为2

    divide(0.5); // 再次尝试除以0.5
    expect(mathRes).toBe(4); // mathRes应为4
    expect(mathBigRes.toString()).toBe('4'); // mathBigRes应为40，考虑到decimalPlaces
    expect(decimalPlaces).toBe(0); // 确认decimalPlaces的值
  });

  // 测试除以BigInt的情况
  it('应该正确处理除以BigInt的情况', () => {
    mathInit(1000000000000); // 初始化mathRes为1000000000000
    divide(BigInt(1000000000)); // 尝试除以1000000000
    expect(mathRes).toBe(1000); // mathRes应为1000
    expect(mathBigRes.toString()).toBe('1000'); // mathBigRes应为1000
  });
  // 测试负数除法操作
  it('应该正确处理负数除法', () => {
    mathInit(-100); // 初始化mathRes为-100
    divide(10); // 尝试除以10
    expect(mathRes).toBe(-10); // mathRes应为-10
    expect(mathBigRes.toString()).toBe('-10'); // mathBigRes应为-10

    mathInit(-100); // 重新初始化mathRes为-100
    divide(-10); // 尝试除以-10
    expect(mathRes).toBe(10); // mathRes应为10
    expect(mathBigRes.toString()).toBe('10'); // mathBigRes应为10

    mathInit(100); // 初始化mathRes为100
    divide(-10); // 尝试除以-10
    expect(mathRes).toBe(-10); // mathRes应为-10
    expect(mathBigRes.toString()).toBe('-10'); // mathBigRes应为-10
  });

  // 测试除以零的情况
  it('应该在尝试除以零时抛出错误', () => {
    mathInit(100); // 初始化mathRes为100
    expect(() => {
      divide(0); // 尝试除以0
    }).toThrow(); // 应该抛出错误，具体的错误类型和信息取决于divide函数的实现
  });
});
import { add, mathRes, mathBigRes, mathInit } from '../../../../views_V2024/main'
describe('add Function', () => {
  // 测试加法操作
  it('应该正确执行加法操作', () => {
    mathInit()
    add(123); // 第一次加法操作
    expect(mathRes).toBe(123);
    expect(mathBigRes.toString()).toBe('123');

    add('456'); // 第二次加法操作，输入为字符串
    expect(mathRes).toBe(579);
    expect(mathBigRes.toString()).toBe('579');

    add(BigInt(789)); // 第三次加法操作，输入为BigInt
    expect(mathRes).toBe(1368);
    expect(mathBigRes.toString()).toBe('1368');
  });

  // 测试加法操作与小数
  it('应该正确处理小数加法', () => {
    mathInit()
    add(123.456); // 加上一个小数
    expect(mathRes).toBeCloseTo(123.456, 3);
    expect(mathBigRes.toString()).toBe('123456');

    add('789.123'); // 再加上一个小数，输入为字符串
    expect(mathRes).toBeCloseTo(912.579, 3);
    expect(mathBigRes.toString()).toBe('912579');
  });
});
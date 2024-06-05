import { decimalPlaces, getMathParam, mathInit, maxDecimalPlaces } from '../../../../views_V2024/main'
describe('getMathParam Function', () => {
  mathInit()
  // 测试整数的转换
  it('应该正确转换整数', () => {
    const result = getMathParam('123');
    expect(result.toString()).toBe(BigInt(123).toString());
    expect(maxDecimalPlaces).toBe(0); // 检查maxDecimalPlaces是否更新
    expect(decimalPlaces).toBe(0); // 检查maxDecimalPlaces是否更新
  });

  // 测试小数的转换
  it('应该正确转换带小数的数值', () => {
    const result = getMathParam('123.45');
    expect(result.toString()).toBe(BigInt(12345).toString());
    expect(maxDecimalPlaces).toBe(2); // 检查maxDecimalPlaces是否更新
    expect(decimalPlaces).toBe(0); // 检查maxDecimalPlaces是否更新
  });

  // 测试小数位数多于预定义值的情况
  it('小数位数多于预定义值时，应该根据输入值的小数位数进行调整', () => {
    mathInit(0.0001)
    const result = getMathParam('123.456');
    expect(result.toString()).toBe(BigInt(1234560).toString());
    expect(maxDecimalPlaces).toBe(4); // 检查maxDecimalPlaces是否更新
    expect(decimalPlaces).toBe(4); // 检查maxDecimalPlaces是否更新
  });

  // 测试没有小数位数的情况
  it('当输入值没有小数位数时，应该根据预定义值进行调整', () => {
    mathInit(0.01)
    const result = getMathParam('123');
    expect(result.toString()).toBe(BigInt(12300).toString());
    expect(decimalPlaces).toBe(2); // 检查maxDecimalPlaces是否更新
    expect(maxDecimalPlaces).toBe(2); // 检查maxDecimalPlaces是否更新
  });
});
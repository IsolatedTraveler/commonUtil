import { decimalPlaces, setMathBigRes, mathInit, mathBigRes, getMathParam } from '../../../../views_V2024/main'
describe('setMathBigRes Function', () => {
  // 测试函数调整mathBigRes的精度
  it('应该正确调整mathBigRes的精度', () => {
    mathInit(12345)
    getMathParam('0.0001')
    setMathBigRes();
    expect(mathBigRes.toString()).toBe(BigInt(123450000).toString()); // 检查mathBigRes是否正确调整
    expect(decimalPlaces).toBe(4); // 检查decimalPlaces是否更新为maxDecimalPlaces
  });
  // 测试函数调整mathBigRes的精度
  it('当maxDecimalPlaces小于decimalPlaces时，应该正确调整mathBigRes和decimalPlaces', () => {
    mathInit(12.345)
    getMathParam('0.1')
    setMathBigRes();
    expect(mathBigRes.toString()).toBe(BigInt(12345).toString()); // 检查mathBigRes是否正确调整
    expect(decimalPlaces).toBe(3); // 检查decimalPlaces是否更新为maxDecimalPlaces
  });
  // 测试函数调整mathBigRes的精度
  it('当maxDecimalPlaces等于decimalPlaces时，应该不改变mathBigRes和decimalPlaces', () => {
    mathInit(12.345)
    getMathParam('0.001')
    setMathBigRes();
    expect(mathBigRes.toString()).toBe(BigInt(12345).toString()); // 检查mathBigRes是否正确调整
    expect(decimalPlaces).toBe(3); // 检查decimalPlaces是否更新为maxDecimalPlaces
  });
});
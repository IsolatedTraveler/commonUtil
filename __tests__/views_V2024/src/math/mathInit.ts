import { mathInit, mathRes, mathBigRes, decimalPlaces } from '../../../../views_V2024/main'
describe('mathInit Function', () => {

  it('should initialize with default value', () => {
    mathInit();
    expect(mathRes).toBe(0);
    // 假设getMathParam返回一个特定的值
    expect(mathBigRes.toString()).toBe(BigInt(0).toString()); // 这里应该根据getMathParam的实际行为来调整
    expect(decimalPlaces).toBe(0); // 确保maxDecimalPlaces被正确导入或定义
  });

  it('should initialize correctly with provided integer value', () => {
    const testValue = 5;
    mathInit(testValue);
    expect(mathRes).toBe(testValue);
    // 同样，根据getMathParam的实际行为调整
    expect(mathBigRes.toString()).toBe(BigInt(testValue).toString()); // 这里假设getMathParam没有副作用
    expect(decimalPlaces).toBe(0);
  });
  it('should initialize correctly with provided decimal value', () => {
    const initialValue = 5.123;
    mathInit(initialValue);
    expect(mathRes).toBe(initialValue);
    expect(mathBigRes.toString()).toBe(BigInt(5123).toString()); // 根据getMathParam的mock返回值，这里假设getMathParam不依赖于传入的值
    expect(decimalPlaces).toBe(3);
  });
});
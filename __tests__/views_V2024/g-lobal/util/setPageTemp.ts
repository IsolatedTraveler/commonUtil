import { setPageTemp } from '../../../../views_V2024/g-lobal'
describe('setPageTemp Function', () => {
  it('当 val 有值时，应直接返回 val', () => {
    const val = 'someValue';
    const mockCallback = jest.fn(); // 创建一个模拟的回调函数
    const result = setPageTemp(val, mockCallback);

    expect(result).toBe(val);
    expect(mockCallback).not.toHaveBeenCalled(); // 确保回调函数没有被调用
  });

  it('当 val 无值且提供了回调函数时，应调用回调函数并返回其结果', () => {
    const mockCallback = jest.fn(() => 'callbackResult');
    const param = { key: 'value' };
    const result = setPageTemp(undefined, mockCallback, param);

    expect(result).toBe('callbackResult');
    expect(mockCallback).toHaveBeenCalledWith(param); // 确认回调函数被正确地传入了参数并调用
  });

  it('当 val 无值且未提供 param 时，应调用回调函数并默认 param 为 undefined', () => {
    const mockCallback = jest.fn(() => 'defaultCallbackResult');
    const result = setPageTemp(null, mockCallback);

    expect(result).toBe('defaultCallbackResult');
    expect(mockCallback).toHaveBeenCalledWith(undefined); // 确认回调函数被调用且 param 默认为 undefined
  });
});
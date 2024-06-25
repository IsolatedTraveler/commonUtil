import { elemLoaded } from "../../../../views_V2024/main";
describe('elemLoaded function', () => {
  test('should call resolve when event type is "load"', () => {
    const mockResolve = jest.fn();
    const mockReject = jest.fn();
    const mockEvent = { type: 'load' };

    // 调用elemLoaded函数，模拟load事件
    elemLoaded(mockEvent, mockResolve, mockReject);

    // 断言resolve函数被调用过
    expect(mockResolve).toHaveBeenCalled();
    // 断言reject函数没有被调用
    expect(mockReject).not.toHaveBeenCalled();
  });

  test('should call reject when event type is not "load"', () => {
    const mockResolve = jest.fn();
    const mockReject = jest.fn();
    const mockEvent = { type: 'error' }; // 模拟一个非load事件，如错误事件

    // 调用elemLoaded函数，模拟非load事件
    elemLoaded( mockEvent, mockResolve, mockReject);

    // 断言reject函数被调用过
    expect(mockReject).toHaveBeenCalled();
    // 断言resolve函数没有被调用
    expect(mockResolve).not.toHaveBeenCalled();
  });
})
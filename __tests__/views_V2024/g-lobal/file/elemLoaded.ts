import {elemLoaded} from '../../../../views_V2024/main';
describe('elemLoaded function', () => {
  test('should call resolve when event type is "load"', () => {
    const mockResolve = jest.fn();
    const mockReject = jest.fn();
    const mockEvent = {type: 'load'};

    elemLoaded(mockEvent, mockResolve, mockReject);

    expect(mockResolve).toHaveBeenCalledWith('success'); // 确保传递了正确的参数
    expect(mockReject).not.toHaveBeenCalled();
  });

  test('should call reject when event type is not "load"', () => {
    const mockResolve = jest.fn();
    const mockReject = jest.fn();
    const mockEvent = {type: 'error'};

    elemLoaded(mockEvent, mockResolve, mockReject);

    expect(mockReject).toHaveBeenCalled();
    expect(mockResolve).not.toHaveBeenCalled();
  });

  test('should call reject when event object does not have a type property', () => {
    const mockResolve = jest.fn();
    const mockReject = jest.fn();
    const mockEvent = {}; // 无type属性的事件对象

    elemLoaded(mockEvent, mockResolve, mockReject);

    expect(mockReject).toHaveBeenCalled();
    expect(mockResolve).not.toHaveBeenCalled();
  });

  test('should call reject when event type is undefined', () => {
    const mockResolve = jest.fn();
    const mockReject = jest.fn();
    const mockEvent = {type: undefined}; // type 属性为 undefined

    elemLoaded(mockEvent, mockResolve, mockReject);

    expect(mockReject).toHaveBeenCalled();
    expect(mockResolve).not.toHaveBeenCalled();
  });

  test('should call reject when event type is null', () => {
    const mockResolve = jest.fn();
    const mockReject = jest.fn();
    const mockEvent = {type: null}; // type 属性为 null

    elemLoaded(mockEvent, mockResolve, mockReject);

    expect(mockReject).toHaveBeenCalled();
    expect(mockResolve).not.toHaveBeenCalled();
  });

  test('should call reject when event type is an empty string', () => {
    const mockResolve = jest.fn();
    const mockReject = jest.fn();
    const mockEvent = {type: ''}; // type 属性为空字符串

    elemLoaded(mockEvent, mockResolve, mockReject);

    expect(mockReject).toHaveBeenCalled();
    expect(mockResolve).not.toHaveBeenCalled();
  });
});

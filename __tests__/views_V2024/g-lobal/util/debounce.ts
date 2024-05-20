import { debounce } from '../../../../views_V2024/g-lobal'
describe('debounce Function', () => {
  let mockFn: jest.Mock;
  let debouncedFn: (...args: any[]) => void;

  beforeEach(() => {
    // 在每个测试开始前初始化 mock 函数
    mockFn = jest.fn();
    // 使用 mock 函数创建一个防抖后的函数，便于测试
    debouncedFn = debounce(mockFn, 300);
  });

  afterEach(() => {
    jest.clearAllTimers(); // 清除所有的计时器，避免影响其他测试
  });

  it('不应立即调用函数', () => {
    debouncedFn(); // 第一次调用
    expect(mockFn).not.toBeCalled(); // 确保函数没有立即被执行
  });

  it('应该在延迟后调用该函数一次', async () => {
    debouncedFn();
    await new Promise((resolve) => setTimeout(resolve, 301)); // 确保异步完成
    expect(mockFn).toBeCalledTimes(1); // 确保函数在延迟后被调用了一次
  });

  it('如果在延迟期内再次调用，则不应调用函数', async () => {
    debouncedFn();
    await new Promise((resolve) => setTimeout(() => {
      debouncedFn();
      setTimeout(resolve, 301);
    }, 100));
    expect(mockFn).toBeCalledTimes(1); // 确保仍然只被调用了一次
  });

  it('应使用最新的参数调用函数', async () => {
    debouncedFn(1);
    await new Promise((resolve) => setTimeout(() => {
      debouncedFn(2);
      setTimeout(resolve, 301);
    }, 100));
    expect(mockFn).lastCalledWith(2); // 确保最后使用的是最新的参数调用的函数
  });
});
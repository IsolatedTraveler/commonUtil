import { session } from '../../../../views_V2024/g-lobal'
describe('session Function', () => {
  beforeEach(() => {
    // 重置所有可能影响后续测试的模拟
    jest.restoreAllMocks();
    jest.resetAllMocks();
  });
  afterEach(() => {
    // 确保每次测试后清理模拟，避免测试间互相影响
    jest.clearAllMocks();
  });
  it('应能正确设置和获取sessionStorage的值', () => {
    const key = 'testKey';
    const value = { data: '测试数据' };
    session(key, value); // 设置值
    expect(session(key)).toEqual(value); // 验证获取的值是否与设置的一致
  });

  it('当传入null时，应能删除对应的sessionStorage项', () => {
    const key = 'testKey3';
    session(key, { data: '将被删除的数据' }); // 先设置一个值
    session(key, null); // 删除
    expect(session(key)).toBeNull(); // 再次获取也应为null
  });
});
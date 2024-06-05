import { setLoaction } from "../../../../__mocks__/location";
import { setVar } from "../../../../views_V2024/main";

describe('setVar Function', () => {
  beforeEach(() => setLoaction());
  afterEach(() => {
    // 确保每次测试后清理模拟，避免测试间互相影响
    jest.clearAllMocks();
  });
  const mkbh = 'cs'
  it('应能正确设置和获取sessionStorage的值', () => {
    const key = 'testKey';
    const value = { data: '测试数据' };
    setVar(mkbh, key, value); // 设置值
    expect(setVar(mkbh, key)).toEqual(value); // 验证获取的值是否与设置的一致
  });

  it('当传入null时，应能删除对应的sessionStorage项', () => {
    const key = 'testKey3';
    setVar(mkbh, key, { data: '将被删除的数据' }); // 先设置一个值
    setVar(mkbh, key, null); // 删除
    expect(setVar(mkbh, key)).toBeNull(); // 再次获取也应为null
  });
});
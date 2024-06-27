import { initLayui } from '../../../../views_V2024/main'
const layui = {
  use: (name: string[] | string, callback: Function) => {
    callback()
  }
};
(window as any).layui = layui
describe('initLayui function', () => {
  beforeEach(() => {
    jest.spyOn(layui, 'use').mockImplementation((_n: any, callback: any) => {
      callback()
    });
  })
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('当 window.layui 存在时，应使用 layui.use 加载 layer 并解析 Promise', async () => {
    await initLayui();
    expect(layui.use).toHaveBeenCalledTimes(1);
  });

  it('当 window.layui 不存在时，应直接解析 Promise', async () => {
    delete (window as any).layui; // 移除模拟的 layui
    await initLayui();
    expect(layui.use).toHaveBeenCalledTimes(0);
  });
});
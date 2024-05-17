import { jquery } from "../../../../../__mocks__/jquery";
import { closeFun, setCloseFun } from "../../../../../views_V2024/g-lobal/main";
(global.window as any).$ = jquery;
(global as any).that = {} as any
describe('setCloseFun function', () => {
  let mockWindowLayerClose: any;
  let spyClick: any;
  let mockVueInstance: any;
  beforeAll(() => {
    // 模拟window.layer.close
    mockWindowLayerClose = jest.fn();
    spyClick = jest.fn();
    (global.window as any).layer = { close: mockWindowLayerClose };
    // 创建Vue实例模拟对象
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });
  it('应当调用window.layer.close正确关闭窗口', () => {
    setCloseFun(1, mockVueInstance, jest.fn(), 1);
    closeFun?.();
    expect(closeFun).toBeUndefined()
    expect(mockWindowLayerClose).toHaveBeenCalledWith(1);
  });
})
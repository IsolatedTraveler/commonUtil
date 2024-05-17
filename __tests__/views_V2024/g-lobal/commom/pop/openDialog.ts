import { jquery } from "../../../../../__mocks__/jquery";
import { openDialog } from "../../../../../views_V2024/g-lobal";
import { closeFun } from "../../../../../views_V2024/g-lobal/main";
(global as any).that = {} as any
describe('openDialog function', () => {
  const layer: any = { open: () => { }, close: (i: number) => i, load: () => 123 }
  var option: any
  beforeEach(() => {
    (window as any).layer = layer
    jest.spyOn(layer, 'open').mockImplementation((options: any) => {
      option = options
      option.success(jquery('1'))
    })
    jest.spyOn(layer, 'close').mockImplementation(() => { });
    jest.spyOn(layer, 'load').mockImplementation(() => { });
    jest.spyOn(window, 'alert').mockImplementation(() => { });
  })
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('应正确转换URL并生成查询参数', async () => {
    const url = 'anyUrl';
    const data = {};
    const res = openDialog(url, data, 'auto', 'auto');
    option?.yes()
    closeFun?.()
    await expect(res).resolves.toBe(1);
    expect(layer.open).toHaveBeenCalledWith(expect.objectContaining({ area: ['auto', 'auto'], btn: ['确定', '取消'], title: '弹出层' }));
  });
  it('应处理layer不可用的情况', () => {
    (window as any).layer = undefined;
    (global as any).$ = {}
    openDialog('xtcs.html', {}, 50, 100, [], '测试');
    expect(window.alert).toHaveBeenCalledWith('该方法依赖layer或jQuery messager，请引用相关依赖。\n消息内容：当前页面未引入layui，暂未实现该方案');
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(false)
      }, 800);
    })
  })
})
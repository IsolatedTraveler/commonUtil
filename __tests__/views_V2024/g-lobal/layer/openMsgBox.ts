import { openMsgBox } from "../../../../views_V2024/g-lobal";
describe('openMsgBox function', () => {
  const layer: any = { confirm: () => { }, close: (i: number) => i, alert: () => { } }
  var option: any
  beforeEach(() => {
    (window as any).layer = layer;
    jest.spyOn(layer, 'confirm').mockImplementation((msg: any, options: any, yesFn: any, cancelFn: any) => {
      options.yes = yesFn;
      options.cancel = cancelFn;
      option = options
    });
    jest.spyOn(layer, 'alert').mockImplementation((msg: any) => {
    })
  })
  afterEach(() => {
    (window as any).layer?.confirm?.mockRestore();
  });
  it('应在type为0时调用alertMsg并解析promise', async () => {
    const result = openMsgBox('Title', 'Message', '0');
    await expect(result).resolves.toBeUndefined();
    expect(layer.alert).toHaveBeenCalledWith('Message')
  });
  const btns = [
    ['1', ['确定', '取消']],
    ['2', ['中止', '重试', '忽略']],
    ['3', ['是', '否', '取消']],
    ['4', ['是', '否']],
    ['5', ['重试', '取消']],
    ['otherType', ['确定', '取消']], // 默认情况
  ]
  it.each(btns)('当未提供按钮且type为%s时，应正确设置按钮', (type: any, expectedButtons: any) => {
    openMsgBox('Title', 'Message', type);
    expect(option?.btn).toEqual(expectedButtons)
  });
  it('提供按钮时应使用提供的按钮', async () => {
    const customButtons = ['同意', '稍后再说', '了解更多'];
    openMsgBox('Title', 'Message', '1', customButtons);
    expect(option?.btn).toEqual(customButtons)
  });
})
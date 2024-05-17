import { confirmMsg } from "../../../../../views_V2024/g-lobal/main";
describe('confirmMsg function', () => {
  const layer: any = { confirm: () => { }, close: (i: number) => i }
  var option: any
  beforeEach(() => {
    (window as any).layer = layer
    jest.spyOn(layer, 'confirm').mockImplementation((msg: any, options: any, yesFn: any, cancelFn: any) => {
      options.yes = yesFn;
      options.cancel = cancelFn;
      option = options
    })
    jest.spyOn(window, 'alert').mockImplementation(() => { });
  })
  afterEach(() => {
    (window as any).layer?.confirm?.mockRestore();
  });
  it('点击确定按钮应解析Promise', async () => {
    const result = confirmMsg('测试消息');
    option?.yes()
    await expect(result).resolves.toBe(1);
    expect(layer.confirm).toHaveBeenCalled()
  });
  it('点击取消按钮应解析Promise', async () => {
    const result = confirmMsg('测试消息');
    option?.cancel()
    await expect(result).rejects.toBeUndefined();
  });
  it('自定义按钮3处理', async () => {
    const customButtons = ['同意', '稍后再说', '了解更多'];
    const promise = confirmMsg('自定义按钮', customButtons);
    option?.cancel()
    await expect(promise).resolves.toBe(2);
  });
  it('自定义按钮4处理', async () => {
    const customButtons = ['同意', '稍后再说', '了解更多', ''];
    const promise = confirmMsg('自定义按钮', customButtons);
    option?.btn3()
    await expect(promise).resolves.toBe(3);
  });
  it('自定义按钮5处理', async () => {
    const customButtons = ['同意', '稍后再说', '了解更多', '', ''];
    const promise = confirmMsg('自定义按钮', customButtons);
    option?.btn4()
    await expect(promise).resolves.toBe(4);
  });
  it('自定义按钮6处理', async () => {
    const customButtons = ['同意', '稍后再说', '了解更多', '', '', ''];
    const promise = confirmMsg('自定义按钮', customButtons);
    option?.btn5()
    await expect(promise).resolves.toBe(5);
  });
  it('自定义按钮6处理', async () => {
    const customButtons = ['同意', '稍后再说', '了解更多', '', '', ''];
    const promise = confirmMsg('自定义按钮', customButtons);
    option?.btn6()
    await expect(promise).rejects.toBeUndefined();
  });
  it('点击右上角关闭按钮应解析Promise', async () => {
    const customButtons = ['同意', '稍后再说'];
    const promise = confirmMsg('自定义按钮', customButtons);
    option?.end()
    await expect(promise).rejects.toBeUndefined();
  });
  it('无layer时应使用alert并拒绝Promise', async () => {
    (window as any).layer = undefined
    const promise = confirmMsg('无layer提示');
    await expect(promise).rejects.toEqual('未提供弹出层解决方案：无layer提示');
  });
})
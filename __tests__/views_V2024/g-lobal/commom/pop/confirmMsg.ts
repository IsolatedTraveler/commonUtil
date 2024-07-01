import { confirmMsg } from "../../../../../views_V2024/g-lobal/main";
describe('confirmMsg function', () => {
  const layer: any = { confirm: () => { }, close: (i: number) => i }
  const $: any = { messager: { confirm: () => { } } }
  var btnName: string | Boolean = 'yes'
  beforeEach(() => {
    (window as any).layer = layer
    jest.spyOn(layer, 'confirm').mockImplementation((msg: any, options: any) => {
      options[btnName as string]?.()
    })
    jest.spyOn($.messager, 'confirm').mockImplementation((title: any, msg: any, fun: any) => {
      fun(btnName)
    })
    jest.spyOn(window, 'alert').mockImplementation(() => { });
  })
  afterEach(() => {
    (window as any).layer?.confirm?.mockRestore();
  });
  it('点击确定按钮应解析Promise', async () => {
    const result = confirmMsg('测试消息');
    await expect(result).resolves.toBe(1);
    expect(layer.confirm).toHaveBeenCalled()
  });
  it('点击取消按钮应解析Promise', async () => {
    btnName = 'btn2'
    const result = confirmMsg('测试消息');
    await expect(result).rejects.toBeUndefined();
  });
  it('自定义按钮3处理', async () => {
    btnName = 'btn2'
    const customButtons = ['同意', '稍后再说', '了解更多'];
    const promise = confirmMsg('自定义按钮', customButtons);
    await expect(promise).resolves.toBe(2);
  });
  it('自定义按钮4处理', async () => {
    btnName = 'btn3'
    const customButtons = ['同意', '稍后再说', '了解更多', ''];
    const promise = confirmMsg('自定义按钮', customButtons);
    await expect(promise).resolves.toBe(3);
  });
  it('自定义按钮5处理', async () => {
    btnName = 'btn4'
    const customButtons = ['同意', '稍后再说', '了解更多', '', ''];
    const promise = confirmMsg('自定义按钮', customButtons);
    await expect(promise).resolves.toBe(4);
  });
  it('自定义按钮6处理', async () => {
    btnName = 'btn5'
    const customButtons = ['同意', '稍后再说', '了解更多', '', '', ''];
    const promise = confirmMsg('自定义按钮', customButtons);
    await expect(promise).resolves.toBe(5);
  });
  it('自定义按钮6处理', async () => {
    btnName = 'btn6'
    const customButtons = ['同意', '稍后再说', '了解更多', '', '', ''];
    const promise = confirmMsg('自定义按钮', customButtons);
    await expect(promise).rejects.toBeUndefined();
  });
  it('点击右上角关闭按钮应解析Promise', async () => {
    btnName = 'end'
    const customButtons = ['同意', '稍后再说'];
    const promise = confirmMsg('自定义按钮', customButtons);
    await expect(promise).rejects.toBeUndefined();
  });
  it('无layer且存在$.message.confirm点击确定按钮应解析Promise', async () => {
    (global as any).$ = $;
    (window as any).layer = undefined
    btnName = true
    const result = confirmMsg('测试消息');
    await expect(result).resolves.toBe(1);
    expect($.messager.confirm).toHaveBeenCalled()
  });
  it('无layer且存在$.message.confirm点击取消按钮应解析Promise', async () => {
    (global as any).$ = $;
    (window as any).layer = undefined
    btnName = false
    const result = confirmMsg('测试消息');
    await expect(result).rejects.toBeUndefined();
  });
  it('无layer时应使用alert并拒绝Promise', async () => {
    (window as any).layer = undefined
    const promise = confirmMsg('无layer提示', ['1', '2', '3']);
    await expect(promise).rejects.toEqual('未提供弹出层解决方案：无layer提示');
  });
})
import {confirmMsg} from '../../../../../views_V2024/g-lobal/main';
function alert(_a: string) {}
function close() {}
function error() {}
function confirm(msg: any, options: any) {
  options[btnName as string]?.();
}
function confirm1(title: any, msg: any, fun: any) {
  fun(btnName);
}
const layer: any = {alert, close, confirm};
const $: any = {messager: {alert, confirm: confirm1}};
const console: any = {error};
var btnName: string | Boolean = 'yes';
describe('confirmMsg function', () => {
  beforeEach(() => {
    jest.spyOn(layer, 'alert').mockImplementation(alert as any);
    jest.spyOn(layer, 'confirm').mockImplementation(confirm as any);
    jest.spyOn(layer, 'close').mockImplementation(close as any);
    jest.spyOn($.messager, 'alert').mockImplementation(alert as any);
    jest.spyOn($.messager, 'confirm').mockImplementation(confirm1 as any);
    jest.spyOn(console, 'error').mockImplementation(error as any);
    window.alert = jest.fn(alert);
  });

  afterEach(() => {
    (window as any).layer = undefined;
    (window as any).$ = undefined;
    (window as any).console = undefined;
    jest.clearAllMocks();
  });

  it('点击确定按钮应解析Promise', async () => {
    (window as any).layer = layer;
    const result = confirmMsg('测试消息');
    btnName = 'yes'; // 模拟点击确定按钮
    await expect(result).resolves.toBe(1);
    expect(layer.confirm).toHaveBeenCalled();
  });

  it('点击取消按钮应拒绝Promise', async () => {
    (window as any).layer = layer;
    btnName = 'btn2'; // 模拟点击取消按钮
    const result = confirmMsg('测试消息');
    await expect(result).rejects.toBeUndefined();
  });

  it('自定义按钮3处理', async () => {
    (window as any).layer = layer;
    btnName = 'btn2'; // 模拟点击第二个按钮
    const customButtons = ['同意', '稍后再说', '了解更多'];
    const promise = confirmMsg('自定义按钮', customButtons);
    await expect(promise).resolves.toBe(2);
  });

  it('自定义按钮4处理', async () => {
    (window as any).layer = layer;
    btnName = 'btn3'; // 模拟点击第三个按钮
    const customButtons = ['同意', '稍后再说', '了解更多', ''];
    const promise = confirmMsg('自定义按钮', customButtons);
    await expect(promise).resolves.toBe(3);
  });

  it('自定义按钮5处理', async () => {
    (window as any).layer = layer;
    btnName = 'btn4'; // 模拟点击第四个按钮
    const customButtons = ['同意', '稍后再说', '了解更多', '', ''];
    const promise = confirmMsg('自定义按钮', customButtons);
    await expect(promise).resolves.toBe(4);
  });

  it('自定义按钮6处理', async () => {
    (window as any).layer = layer;
    btnName = 'btn5'; // 模拟点击第五个按钮
    const customButtons = ['同意', '稍后再说', '了解更多', '', '', ''];
    const promise = confirmMsg('自定义按钮', customButtons);
    await expect(promise).resolves.toBe(5);
  });

  it('自定义按钮超过6个时应只处理前六个', async () => {
    (window as any).layer = layer;
    btnName = 'btn6'; // 模拟点击第六个按钮
    const customButtons = ['同意', '稍后再说', '了解更多', '', '', '', ''];
    const promise = confirmMsg('自定义按钮', customButtons);
    await expect(promise).resolves.toBe(6);
  });

  it('点击右上角关闭按钮应拒绝Promise', async () => {
    (window as any).layer = layer;
    btnName = 'end'; // 模拟点击关闭按钮
    const customButtons = ['同意', '稍后再说'];
    const promise = confirmMsg('自定义按钮', customButtons);
    await expect(promise).rejects.toBeUndefined();
  });

  it('无layer且存在$.message.confirm点击确定按钮应解析Promise', async () => {
    (window as any).$ = $;
    btnName = true; // 模拟点击确定按钮
    const result = confirmMsg('测试消息');
    await expect(result).resolves.toBe(1);
    expect($.messager.confirm).toHaveBeenCalled();
  });

  it('无layer且存在$.message.confirm点击取消按钮应拒绝Promise', async () => {
    (window as any).$ = $;
    btnName = false; // 模拟点击取消按钮
    const result = confirmMsg('测试消息');
    await expect(result).rejects.toBeUndefined();
  });

  it('无layer时应使用alert并拒绝Promise', async () => {
    (window as any).layer = undefined;
    (window as any).$ = {};
    const promise = confirmMsg('无layer提示', ['1', '2', '3']);
    await expect(promise).rejects.toEqual('未提供弹出层解决方案：无layer提示');
    expect(window.alert).toHaveBeenCalledWith('未提供弹出层解决方案：无layer提示');
  });
});

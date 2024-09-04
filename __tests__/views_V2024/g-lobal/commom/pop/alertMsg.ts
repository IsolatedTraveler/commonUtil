import {alertMsg} from '../../../../../views_V2024/g-lobal';
function alert(_a: string) {}
function close() {}
function error() {}
const layer: any = {alert, close};
const $: any = {messager: {alert}};
const console: any = {error};
describe('alertMsg function', () => {
  beforeEach(() => {
    jest.spyOn(layer, 'alert').mockImplementation(alert as any);
    jest.spyOn(layer, 'close').mockImplementation(close as any);
    jest.spyOn($.messager, 'alert').mockImplementation(alert as any);
    jest.spyOn(console, 'error').mockImplementation(error as any);
    window.alert = jest.fn(alert);
  });

  afterEach(() => {
    (window as any).layer = undefined;
    (window as any).$ = undefined;
    (window as any).console = undefined;
    jest.clearAllMocks();
  });

  it('当msg是具有message属性的对象时且layer存在，应调用console.error，然后调用layer.alert', () => {
    (window as any).layer = layer;
    (window as any).console = console;
    const errorMsg = {message: 'Error occurred!'};
    alertMsg(errorMsg);
    expect(layer.alert).toHaveBeenCalledWith(errorMsg.message);
    expect(console.error).toHaveBeenCalledWith(errorMsg);
  });

  it('当msg是普通字符串且layer存在，应调用layer.alert', () => {
    (window as any).layer = layer;
    alertMsg('Test Message');
    expect(layer.alert).toHaveBeenCalledWith('Test Message');
  });

  it('未定义layer时应调用$.messager.alert', () => {
    (window as any).$ = $;
    alertMsg('Test Message');
    expect($.messager.alert).toHaveBeenCalledWith({icon: 'warning', msg: 'Test Message', title: '提示信息'});
  });

  it('当layer和$.messager都不可用时，应回退到本机警报', () => {
    (window as any).layer = undefined;
    (window as any).$ = {};
    alertMsg('Fallback Message');
    expect(window.alert).toHaveBeenCalledWith('该方法依赖layer或jQuery messager，请引用相关依赖。\n消息内容：Fallback Message');
  });

  it('当msg是具有message属性的对象且layer不存在，应调用$.messager.alert', () => {
    (window as any).$ = $;
    (window as any).console = console;
    const errorMsg = {message: 'Error occurred!'};
    alertMsg(errorMsg);
    expect($.messager.alert).toHaveBeenCalledWith({icon: 'warning', msg: errorMsg.message, title: '提示信息'});
  });

  it('当msg是普通字符串且layer不存在，应调用$.messager.alert', () => {
    (window as any).$ = $;
    alertMsg('Test Message');
    expect($.messager.alert).toHaveBeenCalledWith({icon: 'warning', msg: 'Test Message', title: '提示信息'});
  });

  it('当msg是具有message属性的对象且layer和$.messager都不存在，应回退到本机警报', () => {
    (window as any).layer = undefined;
    (window as any).$ = {};
    (window as any).console = console;
    const errorMsg = {message: 'Error occurred!'};
    alertMsg(errorMsg);
    expect(window.alert).toHaveBeenCalledWith('该方法依赖layer或jQuery messager，请引用相关依赖。\n消息内容：Error occurred!');
  });

  it('当msg是普通字符串且layer和$.messager都不存在，应回退到本机警报', () => {
    (window as any).layer = undefined;
    (window as any).$ = {};
    alertMsg('Fallback Message');
    expect(window.alert).toHaveBeenCalledWith('该方法依赖layer或jQuery messager，请引用相关依赖。\n消息内容：Fallback Message');
  });

  it('当msg是普通字符串且layer存在且有自定义标题，应调用layer.alert', () => {
    (window as any).layer = layer;
    alertMsg('Test Message', '自定义标题');
    expect(layer.alert).toHaveBeenCalledWith('Test Message');
  });

  it('当msg是具有message属性的对象且layer存在且有自定义标题，应调用console.error，然后调用layer.alert', () => {
    (window as any).layer = layer;
    (window as any).console = console;
    const errorMsg = {message: 'Error occurred!'};
    alertMsg(errorMsg, '自定义标题');
    expect(layer.alert).toHaveBeenCalledWith(errorMsg.message);
    expect(console.error).toHaveBeenCalledWith(errorMsg);
  });
});

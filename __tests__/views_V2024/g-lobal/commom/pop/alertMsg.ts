import { alertMsg } from "../../../../../views_V2024/g-lobal";
describe('alertMsg function', () => {
  const layer: any = { alert: () => { }, close: (i: number) => i }
  const $: any = { messager: { alert: () => { } } }
  beforeEach(() => {
    (window as any).layer = layer
    jest.spyOn(layer, 'alert').mockImplementation((msg: any) => {
    })
    jest.spyOn($.messager, 'alert').mockImplementation((msg: any) => {
    })
    jest.spyOn(console, 'error').mockImplementation(() => { });
    jest.spyOn(window, 'alert').mockImplementation(() => { });
  })
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('当msg是具有message属性的对象时，应调用console.error，然后调用layer.alert', () => {
    const errorMsg = { message: 'Error occurred!' };
    alertMsg(errorMsg);
    expect(layer.alert).toHaveBeenCalledWith('Error occurred!')
    // expect(window.console.error).toHaveBeenCalledWith(errorMsg)
  });
  it('未定义layer时应调用$.messager.alert', () => {
    (window as any).layer = undefined;
    (global as any).$ = $
    alertMsg('Test Message');
    expect($.messager.alert).toHaveBeenCalledWith({ "icon": "warning", "msg": "Test Message", "title": "提示信息" });
  })
  it('当layer和$.messager都不可用时，应回退到本机警报', () => {
    (window as any).layer = undefined;
    (global as any).$ = {}
    alertMsg('Fallback Message');
    expect(window.alert).toHaveBeenCalledWith('该方法依赖layer或jQuery messager，请引用相关依赖。\n消息内容：Fallback Message');
  });
})
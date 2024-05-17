import { closeParentPop } from "../../../../views_V2024/g-lobal";
describe('closeParentPop function', () => {
  const layer: any = { alert: () => { }, close: (i: number) => i }
  const $: any = { messager: { alert: () => { } } }
  beforeEach(() => {
    (window as any).layer = layer
    jest.spyOn(console, 'warn').mockImplementation(() => { });
    Object.defineProperty(window, 'parent', {
      writable: true,
      value: {},
    })
  })
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('如已定义parent.MODULENAME.closeFun时应调用closeFun', () => {
    const parent: any = { MODULENAME: { closeFun: jest.fn() } };
    window.parent = parent;
    closeParentPop();
    expect(parent.MODULENAME.closeFun).toHaveBeenCalled();
  })
  it('如未定义parent.MODULENAME.closeFun时应调用closeFun', () => {
    const parent: any = {};
    window.parent = parent;
    closeParentPop();
    expect(console.warn).toHaveBeenCalledWith('closeParentPop: parent window or jtUtil or closeFun is not defined.');
  })
})
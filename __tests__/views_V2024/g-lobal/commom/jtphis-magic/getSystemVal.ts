import { getSystemVal, getSystem } from "../../../../../views_V2024/g-lobal/common/system";
describe('getSystemVal function', () => {
  const layer: any = { alert: () => { }, close: (i: number) => i }
  beforeEach(() => {
    (window as any).layer = layer
    jest.spyOn(layer, 'alert').mockImplementation((msg: any) => {
    })
  })
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('如未定义window.jthisJsObject时应报错', () => {
    (window as any).jthisJsObject = undefined
    getSystem()
    getSystemVal('printreport', [])
    expect(layer.alert).toHaveBeenCalledWith('该方法依赖专有浏览器，请在专有浏览器中使用')
  })
  it('如已定义window.jthisJsObject.jthis时且未定义指定方法应报错', () => {
    (window as any).jthisJsObject = { jthis: {} } as any
    const v = getSystem()
    getSystemVal('printreport', [])
    expect(layer.alert).toHaveBeenCalledWith('当前浏览器未定义该方法（printreport），请联系厂家提供技术支持')
  })
  it('如已定义window.jthisJsObject.jthis时且已定义指定方法应调用该方法', () => {
    (window as any).jthisJsObject = { jthis: { printreport() { } } } as any
    jest.spyOn((window as any).jthisJsObject.jthis, 'printreport').mockImplementation((msg: any) => {
    })
    const v = getSystem()
    getSystemVal('printreport', ['123'])
    expect((window as any).jthisJsObject.jthis.printreport).toHaveBeenCalledWith('123')
  })
  it('如已定义window.jthisJsObject.jthis时且已定义指定方法应调用该方法', () => {
    (window as any).jthisJsObject = { jthis: { printreport() { } } } as any
    jest.spyOn((window as any).jthisJsObject.jthis, 'printreport').mockImplementation((msg: any) => {
    })
    const v = getSystem()
    getSystemVal('printreport')
    expect((window as any).jthisJsObject.jthis.printreport).toHaveBeenCalledWith()
  })
})
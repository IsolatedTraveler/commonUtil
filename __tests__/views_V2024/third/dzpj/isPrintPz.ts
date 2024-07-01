import { isPrintPz, getSystem } from "../../../../views_V2024/main";
(window as any).jthisJsObject = { jthis: { printreport() { } } } as any
var confirmJudge: string
describe('isPrintPz function', () => {
  const layer: any = { alert: () => { }, close: (i: number) => i, confirm: (msg: string, data: any) => Promise }
  beforeEach(() => {
    (window as any).layer = layer
    jest.spyOn(layer, 'confirm').mockImplementation((msg: any, options: any) => {
      if (confirmJudge == '是') {
        options?.yes()
      } else {
        options?.btn2()
      }
    })
    jest.spyOn(window, 'alert').mockImplementation(() => { });
    jest.spyOn((window as any).jthisJsObject.jthis, 'printreport').mockImplementation((msg: any) => {
    })
  })
  afterEach(() => {
    (window as any).layer?.confirm?.mockRestore();
  });
  it('isPrint为是时直接打印', async () => {
    getSystem()
    await isPrintPz('123', { cs: '123' }, '是')
    expect((window as any).jthisJsObject.jthis.printreport).toHaveBeenCalledWith("{\"reportid\":\"123\",\"param\":\"cs=123\",\"preview\":\"0\",\"printer\":\"\",\"left\":\"\",\"top\":\"\",\"styleid\":\"\"}")
  })
  it('isPrint为提示且用户选择是时直接打印', async () => {
    confirmJudge = '是'
    getSystem()
    await isPrintPz('123', { cs: '123' }, '提示')
    expect((window as any).jthisJsObject.jthis.printreport).toHaveBeenCalledWith("{\"reportid\":\"123\",\"param\":\"cs=123\",\"preview\":\"0\",\"printer\":\"\",\"left\":\"\",\"top\":\"\",\"styleid\":\"\"}")
  })
  it('isPrint为提示且用户选择否时报错', async () => {
    confirmJudge = '否'
    getSystem()
    try {
      await isPrintPz('123', { cs: '123' }, '提示')
      expect(1).toBe(2)
    } catch (err) {
      expect(err).toEqual(undefined)
    }
  })
})
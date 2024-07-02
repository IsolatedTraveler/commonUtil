import { initXml, XMLHttpRequest } from "../../../../__mocks__/XMLHttpRequest";
import { kpIng, getSystem, setDzpjKpIsPrint, setDzpjKpSync } from "../../../../views_V2024/main";
(window as any).jthisJsObject = { jthis: { printreport() { }, varget() { return JSON.stringify({ jgid: '70' }) } } } as any
var confirmJudge: string
global.XMLHttpRequest = XMLHttpRequest as any
describe('getDzpjKpRes function', () => {
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
    jest.clearAllMocks();
  });
  const url = 'cs'
  initXml(url)
  setDzpjKpIsPrint('提示')
  setDzpjKpSync(true)
  getSystem()
  it('未找到开票类型', async () => {
    expect(kpIng({}, 'cs' as any, 'mz')).rejects.toEqual({ msg: `未获取到mz的cs相关参数` })
  })
  it('正常开票', async () => {
    confirmJudge = '是'
    await kpIng({}, 'kp', 'mz')
    expect(layer.confirm).toHaveBeenCalled()
    expect(layer.confirm.mock.calls[0][0]).toEqual('电子票据开票成功，是否打印收费凭证？');
    expect((window as any).jthisJsObject.jthis.printreport).toHaveBeenCalledWith("{\"reportid\":\"010303_05\",\"param\":\"\",\"preview\":\"0\",\"printer\":\"\",\"left\":\"\",\"top\":\"\",\"styleid\":\"\"}")
  })
})
import { initXml, XMLData, XMLHttpRequest } from "../../../../__mocks__/XMLHttpRequest";
import { getDzpjKpRes, getSystem, setDzpjKpIsPrint, dzpjKpIsPrint, dzpjKpSync, setDzpjKpSync } from "../../../../views_V2024/main";
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
  it('开票成功，无bbid', async () => {
    await getDzpjKpRes({}, url)
    expect(dzpjKpIsPrint).toBe('提示')
    expect(dzpjKpSync).toBe(true)
    expect(layer.confirm).toHaveBeenCalledTimes(0)
    expect((window as any).jthisJsObject.jthis.printreport).toHaveBeenCalledTimes(0)
  })
  it('开票成功，有bbid，提示打印，确认打印', async () => {
    confirmJudge = '是'
    await getDzpjKpRes({}, url, '123')
    expect(layer.confirm).toHaveBeenCalled()
    expect(layer.confirm.mock.calls[0][0]).toEqual('电子票据开票成功，是否打印收费凭证？');
    expect((window as any).jthisJsObject.jthis.printreport).toHaveBeenCalledWith("{\"reportid\":\"123\",\"param\":\"\",\"preview\":\"0\",\"printer\":\"\",\"left\":\"\",\"top\":\"\",\"styleid\":\"\"}")
  })
  it('开票成功，有bbid，提示打印，取消打印', async () => {
    confirmJudge = '否'
    await getDzpjKpRes({}, url, '123')
    expect(layer.confirm).toHaveBeenCalled()
    expect(layer.confirm.mock.calls[0][0]).toEqual('电子票据开票成功，是否打印收费凭证？');
    expect((window as any).jthisJsObject.jthis.printreport).toHaveBeenCalledTimes(0)
  })
  const data: XMLData = { state: 'error', sjlx: 'jsonS' }
  it('开票失败，无bbid', async () => {
    try {
      await getDzpjKpRes(data, url)
      expect(1).toBe(2)
    } catch (e) {
      expect(layer.confirm).toHaveBeenCalledTimes(0)
      expect((window as any).jthisJsObject.jthis.printreport).toHaveBeenCalledTimes(0)
    }
  })
  it('开票失败，有bbid，提示打印，确认打印', async () => {
    confirmJudge = '是'
    try {
      await getDzpjKpRes(data, url, '123')
      expect(1).toBe(2)
    } catch (e) {
      expect(layer.confirm).toHaveBeenCalled()
      expect(layer.confirm.mock.calls[0][0]).toEqual('电子票据开票失败，是否继续打印收费凭证？');
      expect((window as any).jthisJsObject.jthis.printreport).toHaveBeenCalledWith("{\"reportid\":\"123\",\"param\":\"state=error&sjlx=jsonS\",\"preview\":\"0\",\"printer\":\"\",\"left\":\"\",\"top\":\"\",\"styleid\":\"\"}")
    }
  })
  it('开票失败，有bbid，自动打印，确认打印', async () => {
    confirmJudge = '是'
    try {
      setDzpjKpIsPrint('是')
      await getDzpjKpRes(data, url, '123')
      expect(1).toBe(2)
    } catch (e) {
      expect(dzpjKpIsPrint).toBe('是')
      expect(layer.confirm).toHaveBeenCalled()
      expect(layer.confirm.mock.calls[0][0]).toEqual('电子票据开票失败，是否继续打印收费凭证？');
      expect((window as any).jthisJsObject.jthis.printreport).toHaveBeenCalledWith("{\"reportid\":\"123\",\"param\":\"state=error&sjlx=jsonS\",\"preview\":\"0\",\"printer\":\"\",\"left\":\"\",\"top\":\"\",\"styleid\":\"\"}")
    }
  })
  it('开票失败，有bbid，不打印', async () => {
    try {
      setDzpjKpIsPrint('否')
      await getDzpjKpRes(data, url, '123')
      expect(1).toBe(2)
    } catch (e) {
      expect(dzpjKpIsPrint).toBe('否')
      expect(layer.confirm).toHaveBeenCalledTimes(0)
      expect((window as any).jthisJsObject.jthis.printreport).toHaveBeenCalledTimes(0)
    }
  })
  it('开票成功，有bbid，自动打印', async () => {
    setDzpjKpIsPrint('是')
    await getDzpjKpRes({}, url, '123')
    expect(dzpjKpIsPrint).toBe('是')
    expect(layer.confirm).toHaveBeenCalledTimes(0)
    expect((window as any).jthisJsObject.jthis.printreport).toHaveBeenCalledWith("{\"reportid\":\"123\",\"param\":\"\",\"preview\":\"0\",\"printer\":\"\",\"left\":\"\",\"top\":\"\",\"styleid\":\"\"}")
  })
  it('开票成功，有bbid，不打印', async () => {
    setDzpjKpIsPrint('否')
    await getDzpjKpRes({}, url, '123')
    expect(layer.confirm).toHaveBeenCalledTimes(0)
    expect((window as any).jthisJsObject.jthis.printreport).toHaveBeenCalledTimes(0)
  })
  it('开票成功，有bbid，提示打印，确认打印，异步打印', async () => {
    confirmJudge = '是'
    setDzpjKpIsPrint('提示')
    setDzpjKpSync(false)
    const res = await getDzpjKpRes({}, url, '123')
    expect(dzpjKpSync).toBe(false)
    expect(layer.confirm).toHaveBeenCalledTimes(0)
    expect(res.kp).toBeInstanceOf(Promise);
    return res.kp.then(() => {
      expect(layer.confirm).toHaveBeenCalled()
      expect(layer.confirm.mock.calls[0][0]).toEqual('电子票据开票成功，是否打印收费凭证？');
      expect((window as any).jthisJsObject.jthis.printreport).toHaveBeenCalledWith("{\"reportid\":\"123\",\"param\":\"\",\"preview\":\"0\",\"printer\":\"\",\"left\":\"\",\"top\":\"\",\"styleid\":\"\"}")
    })
  })
})
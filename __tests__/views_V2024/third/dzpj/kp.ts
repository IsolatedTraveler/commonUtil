import { initXml, setXmlResFormatUrl, XMLHttpRequest } from "../../../../__mocks__/XMLHttpRequest";
import { config } from "../../../../__mocks__/config";
import { kp, getSystem, setDzpjKpIsPrint, setDzpjKpSync, DZPJ_PZXX_URL, XTCS_URL, CONFIG_URL } from "../../../../views_V2024/main";
(window as any).jthisJsObject = { jthis: { printreport() { }, varget() { return JSON.stringify('') } } } as any
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
  getSystem()
  const data = { jsid: '2', pjmc: 'cs' }
  it('正常开票', async () => {
    setXmlResFormatUrl([CONFIG_URL, DZPJ_PZXX_URL, XTCS_URL], [
      config,
      [
        { dz: 'http://example.com/', dm: 'id1', sdz: 'value1' },
        { dz: 'http://example.com/', dm: 'id2', sdz: 'value2' },
      ],
      [{ xh: '1', csz: '同步' }, { xh: '2', csz: '提示' }]
    ])
    confirmJudge = '是'
    await kp(data, 'mz', 'kp')
    expect(layer.confirm).toHaveBeenCalled()
    expect(layer.confirm.mock.calls[0][0]).toEqual('电子票据开票成功，是否打印收费凭证？');
    expect((window as any).jthisJsObject.jthis.printreport).toHaveBeenCalledWith("{\"reportid\":\"010303_05\",\"param\":\"jsid=2&pjmc=cs\",\"preview\":\"0\",\"printer\":\"\",\"left\":\"\",\"top\":\"\",\"styleid\":\"\"}")
  })
  // it('失败', async () => {
  //   setXmlResFormatUrl([DZPJ_PZXX_URL, XTCS_URL], [
  //     -1,
  //     [{ xh: '1', csz: '同步' }, { xh: '2', csz: '是' }]
  //   ])
  //   expect(kp(data, 'mz', 'cs' as any)).rejects.toEqual('xmlRes')
  // })
})
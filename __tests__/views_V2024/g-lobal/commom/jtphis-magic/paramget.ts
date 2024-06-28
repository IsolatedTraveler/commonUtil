import { XTCS_URL, paramget } from "../../../../../views_V2024/g-lobal/common/system";
import { XMLHttpRequest, initXml, setXmlRes } from "../../../../../__mocks__/XMLHttpRequest";

global.XMLHttpRequest = XMLHttpRequest as any
describe('paramget function', () => {
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
  initXml(XTCS_URL)
  var data = [{ xh: '01', csz: '2' }, { xh: '02', csz: '0' }]
  setXmlRes([
    { data: [{ xh: '01', 'csz': '1' }] },
    { data },
    { data: [] }
  ])
  it('测试首次获取系统参数', async () => {
    const result = await paramget('cs', '01')
    expect(result).toEqual('1')
  })
  it('测试首次获取所有系统参数', async () => {
    const result = await paramget('cs1')
    expect(result).toEqual({ "01": "2", "02": "0" })
  })
  it('测试首次未获取到系统参数情况', async () => {
    const result = await paramget('cs2', '01')
    expect(result).toEqual(undefined)
  })
  it('测试非首次系统参数', async () => {
    const result = await paramget('cs', '01')
    expect(result).toEqual('1')
  })
})
import { MKQX_URL, possessMkqx } from "../../../../../views_V2024/g-lobal/common/system";
import { XMLHttpRequest, initXml, setXmlResMagicFormat } from "../../../../../__mocks__/XMLHttpRequest";

global.XMLHttpRequest = XMLHttpRequest as any
describe('possessMkqx function', () => {
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
  initXml(MKQX_URL)
  var data = [{ dm: '01', mr: '1' }, { dm: '02', mr: '0' }]
  setXmlResMagicFormat([
    [{ 'mr': '1' }],
    data,
    null
  ])
  it('测试首次获取权限', async () => {
    const result = await possessMkqx('cs', '01')
    expect(result).toEqual('1')
  })
  it('测试首次获取所有权限', async () => {
    const result = await possessMkqx('cs')
    expect(result).toEqual({ '01': '1', '02': '0' })
  })
  it('测试首次未获取到权限情况', async () => {
    const result = await possessMkqx('cs1', '01')
    expect(result).toEqual('0')
  })
  it('测试非首次获取权限', async () => {
    const result = await possessMkqx('cs', '01')
    expect(result).toEqual('1')
  })
  it('测试非首次获取所有权限', async () => {
    const result = await possessMkqx('cs')
    expect(result).toEqual({ '01': '1', '02': '0' })
  })
  it('测试获取所有权限错误', async () => {
    const result = await possessMkqx('cs2')
    expect(layer.alert).toHaveBeenCalledWith('获取权限失败: undefined')
    expect(result).toEqual({})
  })
  it('测试获取具体权限错误', async () => {
    const result = await possessMkqx('cs2', '01')
    expect(layer.alert).toHaveBeenCalledWith('获取权限失败: undefined')
    expect(result).toBe('0')
  })
})
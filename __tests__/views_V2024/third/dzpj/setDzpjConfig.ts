import { XTCS_URL, setDzpjConfig } from '../../../../views_V2024/main'
import { XMLHttpRequest, initXml, setXmlResFormat } from "../../../../__mocks__/XMLHttpRequest"
global.XMLHttpRequest = XMLHttpRequest as any
describe('setDzpjConfig function', () => {
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
  setXmlResFormat([[{ xh: '1', csz: '同步' }, { xh: '2', csz: '是' }], -1])
  const jgid = 'test_jgid';
  const expectedResult = {
    sync: true,
    isPrint: '是'
  };
  it('测试首次获取动态配置', async () => {
    const result = await setDzpjConfig(jgid);
    expect(result).toEqual(expectedResult);
  });
  it('测试首次获取失败的动态配置', async () => {
    const result = await setDzpjConfig('cs');
    expect(result).toEqual(expectedResult);
  });
  it('测试再次获取同一动态配置', async () => {
    const result = await setDzpjConfig(jgid);
    expect(result).toEqual(expectedResult);
  });
});
import { XMLData, XMLHttpRequest, XML_JSON_S_DATA, getXmlCalc, initXml } from "../../../../__mocks__/XMLHttpRequest"
import { setLoaction } from "../../../../__mocks__/location";
import { ajaxGet } from "../../../../views_V2024/g-lobal"
import { Authorization } from "../../../../views_V2024/g-lobal/main";
global.XMLHttpRequest = XMLHttpRequest as any
describe('ajaxGet function', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    setLoaction()
  });
  afterEach(() => {
    // 确保每次测试后清理模拟，避免测试间互相影响
    jest.clearAllMocks();
  });
  it('测试get请求', async () => {
    const url = 'ajaxGet', param: XMLData = {
      state: 'success',
      sjlx: 'jsonS'
    }
    initXml(url)
    const cs = Authorization ? '0' : '1'
    const v = await ajaxGet(url, { v: 1 }, { param }, {})
    expect(v).toEqual(XML_JSON_S_DATA)
    const res = getXmlCalc()
    expect(res.jqcs).toBe(cs)
  });
})
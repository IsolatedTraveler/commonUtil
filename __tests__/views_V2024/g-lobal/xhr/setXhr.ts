import { XMLData, XMLHttpRequest, getXmlCalc, initXml, setXmlRes } from '../../../../__mocks__/XMLHttpRequest';
import { setLoaction } from '../../../../__mocks__/location';
import { Authorization, XHR_JQ_CODE } from '../../../../views_V2024/g-lobal/common/xhr/magic/var';
import { setXhr } from '../../../../views_V2024/g-lobal/main';
global.XMLHttpRequest = XMLHttpRequest as any
const url: string = '/api/test'
describe('setXhr Function', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    setLoaction()
  });
  afterEach(() => {
    // 确保每次测试后清理模拟，避免测试间互相影响
    jest.clearAllMocks();
  });
  it('当isCheck为true时，应调用checkAuth和getXhr', async () => {
    initXml(url)
    const data: XMLData = { state: 'success', sjlx: 'jsonS' }
    const cs = Authorization ? '0' : '1'
    const v = await setXhr('/api/test', data, {}, 'GET', { urlType: 'service', isCheck: true }, {});
    const res = getXmlCalc()
    expect(res.jqcs).toBe(cs)
    expect(res.xhrUrl).toBe('1')
    expect(Authorization).toBe(true)
    expect(v).toEqual({ code: 1, message: undefined, data: {} })
  });
  it('测试二次鉴权，后返回成功数据', async () => {
    initXml(url)
    sessionStorage.setItem('Authorization1', 'cs1')
    setXmlRes([{ code: XHR_JQ_CODE, message: '鉴权失败' }, { code: 1, data: 'cs' }])
    const data: XMLData = { state: 'success', sjlx: 'session' }
    const v = await setXhr('/api/test', data, {}, 'GET', { urlType: 'service', isCheck: true }, {}, false);
    const res = getXmlCalc()
    expect(res.jqcs).toBe('1')
    expect(res.xhrUrl).toBe('2')
    expect(Authorization).toBe('cs1')
    expect(v).toEqual({ code: 1, data: 'cs' })
  });
  it('测试二次鉴权，后返回鉴权失败数据', async () => {
    initXml(url)
    sessionStorage.setItem('Authorization1', 'cs1')
    setXmlRes([{ code: XHR_JQ_CODE, message: '鉴权失败' }, { code: XHR_JQ_CODE, message: '鉴权失败' }])
    const data: XMLData = { state: 'success', sjlx: 'session' }
    const v = await setXhr('/api/test', data, {}, 'GET', { urlType: 'service', isCheck: true }, {}, false);
    const res = getXmlCalc()
    expect(res.jqcs).toBe('1')
    expect(res.xhrUrl).toBe('2')
    expect(Authorization).toBe('cs1')
    expect(v).toEqual({ code: XHR_JQ_CODE, message: '鉴权失败' })
  });
});
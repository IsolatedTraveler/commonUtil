import { XMLHttpRequest, XMLData, XML_TIMEOUT_DATA, XML_ERROR_DATA, XML_JSON_E_DATA, initXml, getXmlCalc } from '../../../../__mocks__/XMLHttpRequest';
import { setLoaction } from '../../../../__mocks__/location';
import { getXhr } from '../../../../views_V2024/g-lobal/main'

global.XMLHttpRequest = XMLHttpRequest as any
describe('getXhr Function', () => {
  beforeEach(() => setLoaction());
  afterEach(() => {
    // 确保每次测试后清理模拟，避免测试间互相影响
    jest.clearAllMocks();
  });
  it('xhr 测试成功返回数据JSON', async () => {
    let url = 'http://127.0.0.1:8020/his-flie/sc/public/data/config.json'
    const data: XMLData = {
      state: 'success',
      sjlx: 'jsonS'
    }
    const xhr = await getXhr(url, data, {}, 'GET')
    expect(xhr).toEqual({ code: 1, message: undefined, data: {} })
  });
  it('xhr 测试成功返回错误数据JSON', async () => {
    let url = 'http://127.0.0.1:8020/his-flie/sc/public/data/config.json'
    const data: XMLData = {
      state: 'success',
      sjlx: 'jsonE'
    }
    const xhr = await getXhr(url, data, {}, 'GET')
    expect(xhr).toEqual(XML_JSON_E_DATA)
  });
  it('xhr 测试成功返回数据String', async () => {
    let url = 'http://127.0.0.1:8020/his-flie/sc/public/data/config.json'
    initXml(url)
    const data: XMLData = {
      state: 'success',
      sjlx: 'string'
    }
    const xhr = await getXhr(url, data, {}, 'GET', 'origin', { headers: { accessToken: 'cs' } })
    const res = getXmlCalc()
    expect(res.head).toBe(JSON.stringify({ "Content-Type": "application/json; charset=utf-8", "accessToken": "cs" }))
    expect(xhr).toBe('success')
  });
  it('xhr 测试返回错误数据', async () => {
    let url = 'http://127.0.0.1:8020/his-flie/sc/public/data/config.json'
    const data: XMLData = {
      state: 'error',
      sjlx: 'string'
    }
    await expect(getXhr(url, data, {}, 'GET')).rejects.toEqual(XML_ERROR_DATA)
  });
  it('xhr 测试返回超时数据', async () => {
    let url = 'http://127.0.0.1:8020/his-flie/sc/public/data/config.json'
    const data: XMLData = {
      state: 'timeout',
      sjlx: 'string'
    }
    await expect(getXhr(url, data, {}, 'GET')).rejects.toEqual(XML_TIMEOUT_DATA)
  });
});
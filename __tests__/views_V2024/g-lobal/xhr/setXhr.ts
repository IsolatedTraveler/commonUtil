import { XMLData, XMLHttpRequest, getXmlCalc, initXml } from '../../../../__mocks__/XMLHttpRequest';
import { setLoaction } from '../../../../__mocks__/location';
import { Authorization } from '../../../../views_V2024/g-lobal/common/xhr/magic/var';
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
    const data: XMLData = {
      state: 'success',
      sjlx: 'jsonS'
    }
    const v = await setXhr('/api/test', data, {}, 'GET', { urlType: 'service', isCheck: true }, {}, false);
    const res = getXmlCalc()
    expect(res.jqcs).toBe('1')
    expect(res[url]).toBe('1')
    expect(Authorization).toBe(true)
    expect(v).toEqual({ code: 1, message: undefined, data: {} })
  });
});
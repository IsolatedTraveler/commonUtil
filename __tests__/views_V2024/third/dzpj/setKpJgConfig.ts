import { DZPJ_PZXX_URL, setKpJgConfig } from '../../../../views_V2024/main'
import { XMLHttpRequest, initXml, setXmlResFormat } from "../../../../__mocks__/XMLHttpRequest"
import { setLoaction } from "../../../../__mocks__/location";
global.XMLHttpRequest = XMLHttpRequest as any
describe('setKpJgConfig function', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    setLoaction()
  });
  afterEach(() => {
    // 确保每次测试后清理模拟，避免测试间互相影响
    jest.clearAllMocks();
  });
  initXml(DZPJ_PZXX_URL)
  setXmlResFormat([[
    { dz: 'http://example.com/', dm: 'id1', sdz: 'value1' },
    { dz: 'http://example.com/', dm: 'id2', sdz: 'value2' },
  ], []])
  const jgid = 'test_jgid';
  it('should return correct kpJg config', async () => {
    const expectedConfig = {
      url: 'http://example.com',
      id1: 'value1',
      id2: 'value2',
    };
    const config = await setKpJgConfig(jgid);
    expect(config).toEqual(expectedConfig);
  });
  it('测试未查询到配置信息的情况', async () => {
    try {
      await setKpJgConfig(jgid);
    } catch (e) {
      expect(e).toEqual({ "code": 1, "data": [], "message": "xmlRes" });
    }
  });
});
import { DZPJ_PZXX_URL, XTCS_URL, isOpenFp, dzpjKpSync, dzpjKpIsPrint, dzpjKpConfig, setUser } from '../../../../views_V2024/main'
import { XMLHttpRequest, setXmlResFormatUrl } from "../../../../__mocks__/XMLHttpRequest"
import { setLoaction } from "../../../../__mocks__/location";
global.XMLHttpRequest = XMLHttpRequest as any
describe('isOpenFp function', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    setLoaction()
  });
  afterEach(() => {
    // 确保每次测试后清理模拟，避免测试间互相影响
    jest.clearAllMocks();
  });
  it('测试成功获取配置信息', async () => {
    await import('../../../../views_V2024/g-lobal').then(async ({ session }) => {
      setXmlResFormatUrl([DZPJ_PZXX_URL, XTCS_URL], [
        [
          { dz: 'http://example.com/', dm: 'id1', sdz: 'value1' },
          { dz: 'http://example.com/', dm: 'id2', sdz: 'value2' },
        ],
        [{ xh: '1', csz: '同步' }, { xh: '2', csz: '是' }]
      ])
      const ryxx = { jgid: '70' };
      session('userinfo', { ryxx })
      const expectedConfig = {
        url: 'http://example.com',
        id1: 'value1',
        id2: 'value2',
      };
      const res = await isOpenFp();
      expect(dzpjKpSync).toBe(true)
      expect(dzpjKpIsPrint).toBe('是')
      expect(res).toEqual(expectedConfig);
    })
  });
  it('测试失败获取配置信息', async () => {
    await import('../../../../views_V2024/g-lobal').then(async ({ session }) => {
      setXmlResFormatUrl([DZPJ_PZXX_URL, XTCS_URL], [
        -1,
        [{ xh: '1', csz: '同步' }, { xh: '2', csz: '是' }]
      ])
      const ryxx = { jgid: '71' };
      session('userinfo', { ryxx })
      try {
        setUser()
        await isOpenFp();
        expect(1).toBe(2)
      } catch (e: any) {
        expect(dzpjKpConfig['71']).toEqual(undefined)
        expect(e.message).toEqual("xmlRes")
      }
    })
  });
});
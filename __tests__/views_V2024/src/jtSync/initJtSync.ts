import { XMLHttpRequest, initXml, setXmlRes } from '../../../../__mocks__/XMLHttpRequest';
import { setLoaction } from "../../../../__mocks__/location";
import { dicUrl, initJtSync, organization, region, startRule } from "../../../../views_V2024/main";
global.XMLHttpRequest = XMLHttpRequest as any
describe('initJtSync Function', () => {
  beforeEach(() => setLoaction());
  afterEach(() => {
    // 确保每次测试后清理模拟，避免测试间互相影响
    jest.clearAllMocks();
  });
  const ryxx = { jgid: '70' };
  it('should set organization and region correctly', async () => {
    await import('../../../../views_V2024/g-lobal').then(async ({ session }) => {
      session('userinfo', { ryxx })
      initXml(dicUrl)
      setXmlRes([{ cs: true }])
      await initJtSync();
      expect(organization).toBe('70');
      expect(region).toBe('nm');
      // 验证 startRule 是否被正确赋值
      expect(startRule).toEqual({ cs: true });
    })
  })
});
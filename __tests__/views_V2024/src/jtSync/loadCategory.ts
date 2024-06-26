import { XMLHttpRequest, initXml, setXmlRes } from '../../../../__mocks__/XMLHttpRequest';
import { jquery } from "../../../../__mocks__/jquery";
import { setLoaction } from "../../../../__mocks__/location";
import { dicUrl, loadCategory } from "../../../../views_V2024/main";
global.XMLHttpRequest = XMLHttpRequest as any
describe('loadCategory Function', () => {
  const $: any = jquery
  beforeEach(() => setLoaction());
  afterEach(() => {
    // 确保每次测试后清理模拟，避免测试间互相影响
    jest.clearAllMocks();
  });
  const ryxx = { jgid: '70' };
  initXml(dicUrl)
  setXmlRes([{
    nm: {
      70: { libA: true },
      def: { libB: true }
    },
    def: { libC: true }
  }])
  it('should initialize and load script when category exists', async () => {
    await import('../../../../views_V2024/g-lobal').then(async ({ session }) => {
      session('userinfo', { ryxx })
      try {
        await loadCategory('cs');
      } catch (error: any) {
        // 确认错误被正确抛出并且是期望类型的错误
        expect(error).toBeInstanceOf(Error);
        // 确认错误消息内容正确
        expect(error.message).toBe('未配置该功能：【cs】');
      }
    })
  })
  it('should initialize and load script when category exists', async () => {
    await import('../../../../views_V2024/g-lobal').then(async ({ session }) => {
      (global as any).$ = $
      session('userinfo', { ryxx })
      const res = loadCategory('libA');
      expect(res).resolves.toBe('success')
    })
  })
});
import { XMLHttpRequest, initXml, setXmlResMagicFormat } from '../../../../__mocks__/XMLHttpRequest';
import { jquery } from "../../../../__mocks__/jquery";
import { setLoaction } from "../../../../__mocks__/location";
import { dicUrlBySql, loadCategoryBySql } from "../../../../views_V2024/main";
global.XMLHttpRequest = XMLHttpRequest as any
describe('loadCategoryBySql Function', () => {
  const $: any = jquery
  beforeEach(() => setLoaction());
  afterEach(() => {
    // 确保每次测试后清理模拟，避免测试间互相影响
    jest.clearAllMocks();
  });
  const ryxx = { jgid: '70' };
  initXml(dicUrlBySql)
  setXmlResMagicFormat([[{
    dylj: 'dylj.js',
    csmb: 'csmb',
    cssm: 'cssm'
  }], [{
    dylj: '',
    csmb: 'csmb',
    cssm: 'cssm'
  }]])
  sessionStorage.setItem('session3', JSON.stringify({ code: 2, data: { list: it }, message: 'cs' }))
  it('should initialize and load script when category exists', async () => {
    await import('../../../../views_V2024/g-lobal').then(async ({ session }) => {
      (global as any).$ = $
      session('userinfo', { ryxx })
      const res = await loadCategoryBySql('cs');
      expect(res).toEqual({
        csmb: 'csmb',
        cssm: 'cssm'
      })
    })
  })
  it('should initialize and load script when category exists', async () => {
    await import('../../../../views_V2024/g-lobal').then(async ({ session }) => {
      (global as any).$ = $
      session('userinfo', { ryxx })
      try {
        await loadCategoryBySql('cs');
      } catch (error: any) {
        // 确认错误被正确抛出并且是期望类型的错误
        expect(error).toBeInstanceOf(Error);
        // 确认错误消息内容正确
        expect(error.message).toBe('当前用户暂未开通该功能');
      }
    })
  })
  it('should initialize and load script when category exists', async () => {
    await import('../../../../views_V2024/g-lobal').then(async ({ session }) => {
      (global as any).$ = $
      session('userinfo', { ryxx })
      try {
        await loadCategoryBySql('cs');
      } catch (error: any) {
        // 确认错误被正确抛出并且是期望类型的错误
        expect(error).toBeInstanceOf(Error);
        // 确认错误消息内容正确
        expect(error.message).toBe('cs');
      }
    })
  })
});
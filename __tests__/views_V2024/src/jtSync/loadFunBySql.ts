import { XMLHttpRequest, initXml, setXmlResMagicFormat } from '../../../../__mocks__/XMLHttpRequest';
import { jquery } from "../../../../__mocks__/jquery";
import { setLoaction } from "../../../../__mocks__/location";
import { dicUrlBySql, loadFunBySql } from "../../../../views_V2024/main";
global.XMLHttpRequest = XMLHttpRequest as any
(window as any).jt_third_cs = { init() { } }
describe('loadFunBySql Function', () => {
  const $: any = jquery
  beforeEach(() => {
    setLoaction()
    jest.spyOn((window as any).jt_third_cs, 'init').mockImplementation(() => { });
  })
  afterEach(() => {
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
      await loadFunBySql('cs', 'init', { type: 'init' });
      expect((window as any).jt_third_cs.init).toHaveBeenCalledWith({ type: 'init' }, { csmb: 'csmb', cssm: 'cssm' });
      try {
        await loadFunBySql('cs', 'init1', { type: 'init' });
        expect((window as any).jt_third_cs.init).toHaveBeenCalledWith({ type: 'init' }, { csmb: 'csmb', cssm: 'cssm' });
      } catch (error: any) {
        // 确认错误被正确抛出并且是期望类型的错误
        expect(error).toBeInstanceOf(Error);
        // 确认错误消息内容正确
        expect(error.message).toBe('第三方插件未提供该方法init1');
      }
    })
  })
  it('should initialize and load script when category exists1', async () => {
    await import('../../../../views_V2024/g-lobal').then(async ({ session }) => {
      (global as any).$ = $
      session('userinfo', { ryxx })
      try {
        const res = await loadFunBySql('cs1', 'init', {});
        expect(res).toBe(undefined);
      } catch (error: any) {
        // 确认错误被正确抛出并且是期望类型的错误
        expect(error).toBeInstanceOf(Error);
        // 确认错误消息内容正确
        expect(error.message).toBe('当前用户暂未开通该功能');
      }
    })
  })
  it('should initialize and load script when category exists2', async () => {
    await import('../../../../views_V2024/g-lobal').then(async ({ session }) => {
      (global as any).$ = $
      session('userinfo', { ryxx })
      try {
        const res = await loadFunBySql('cs2', 'init', {});
        expect(res).toBe(undefined);
      } catch (error: any) {
        // 确认错误被正确抛出并且是期望类型的错误
        expect(error).toBeInstanceOf(Error);
        // 确认错误消息内容正确
        expect(error.message).toBe('cs');
      }
    })
  })
});
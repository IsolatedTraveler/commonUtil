import { getThirdUrl, setOrganization, setRegion, startRule } from "../../../../views_V2024/main";
(window as any).jt_third_cs = { init() { } }
describe('getThirdUrl function', () => {
  beforeEach(() => {
    // 在每个测试开始前重置全局变量状态
    setOrganization('org1')
    setRegion('reg1')
    startRule.reg1 = {
      org1: { libA: true },
      def: { libB: true }
    }
    startRule.def = { libC: true }
  });

  it('should return URL for specific organization and region rule', () => {
    const url = getThirdUrl('libA');
    expect(url).toBe('/lib23/js/third/libA/reg1_org1.js');
  });

  it('should return URL using default organization rule', () => {
    const url = getThirdUrl('libB');
    expect(url).toBe('/lib23/js/third/libB/reg1.js');
  });

  it('should return URL using global default rule', () => {
    const url = getThirdUrl('libC');
    expect(url).toBe('/lib23/js/third/libC/def.js');
  });

  it('should return empty string when no rule matches', () => {
    const url = getThirdUrl('nonExistentLib');
    expect(url).toBe('');
  });
});
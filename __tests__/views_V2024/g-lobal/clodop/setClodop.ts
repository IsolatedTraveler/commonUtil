// import { setClodop, getClodopIng, CLODOP_URL } from './path/to/your/file'; // 替换为实际的导入路径
// import { loadJs } from './path/to/loadJs'; // 替换为实际的导入路径
// import { getConfig } from './path/to/getConfig'; // 替换为实际的导入路径
// import { alertMsg } from './path/to/alertMsg'; // 替换为实际的导入路径
import { Clodop } from '../../../../__mocks__/clodop';
import { jquery } from "../../../../__mocks__/jquery";
import { setClodop, clodop, CLODOP_URL, setConfig, clearClodop, setConfigData } from '../../../../views_V2024/main';
const layer: any = { alert: () => { }, close: (i: number) => i }
  , res = { "key": "123", "name": "测试" }
  , config = { lodop_licenses_name: '测试', lodop_licenses_id: '123' }
  , $: any = jquery
let judge = true
describe('setClodop 函数', () => {
  beforeEach(() => {
    (window as any).layer = layer;
    (window as any).getClodop = () => {
      return new Clodop()
    };
    res.key = config.lodop_licenses_id
    res.name = config.lodop_licenses_name;
    jest.spyOn(layer, 'alert').mockImplementation((msg: any) => {
    })
  })
  afterEach(() => {
    jest.clearAllMocks();
  });
  test('当 clodop 不存在时，且window.getClodop 存在时', async () => {
    setConfig(config)
    setConfigData()
    const result = await setClodop();
    config.lodop_licenses_name = 'name'
    judge = false
    expect(result).toEqual(res);
  });
  test('当 clodop 不存在时，且window.getClodop 不存在时，加载window.getClodop成功', async () => {
    // 模拟 clodop 不存在的情况
    clearClodop()
    setConfig(config)
    setConfigData();
    (window as any).getClodop = undefined;
    (global as any).$ = $;
    (global as any).$.beforeOnload = () => (window as any).getClodop = () => new Clodop();
    const result = await setClodop();
    (global as any).$.beforeOnload = undefined
    expect(result).toEqual(res);
  });
  test('当 clodop 已经存在时', async () => {
    // 模拟 clodop 已经存在的情况
    const result = await setClodop();
    console.log(result, res)
    expect(result).toEqual(res);
  });
  test('当 clodop 不存在时，且window.getClodop 不存在时，加载window.getClodop失败', async () => {
    clearClodop()
    setConfig(config)
    setConfigData();
    (window as any).getClodop = undefined;
    (global as any).$ = $;
    try {
      const result = await setClodop();
      expect(result).toEqual(res);
    } catch (e: any) {
      expect(e.message).toBe('未安装Clodop插件，请安装Clodop插件后刷新使用')
    }
  });
});
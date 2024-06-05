import { DICS, DIC_URL, dicget } from "../../../../../views_V2024/g-lobal/common/system";
import { XMLHttpRequest, initXml, setXmlResMagicFormat } from "../../../../../__mocks__/XMLHttpRequest";
import { getAuthorization } from "../../../../../views_V2024/main";

(global as any).XMLHttpRequest = () => {
  return new XMLHttpRequest() as any
}
describe('dicget function', () => {
  const layer: any = { alert: () => { }, close: (i: number) => i }
  const $: any = { messager: { alert: () => { } } }
  beforeEach(() => {
    (window as any).layer = layer
    jest.spyOn(layer, 'alert').mockImplementation((msg: any) => {
    })
    jest.spyOn($.messager, 'alert').mockImplementation((msg: any) => {
    })
    jest.spyOn(console, 'error').mockImplementation(() => { });
    jest.spyOn(window, 'alert').mockImplementation(() => { });
    jest.spyOn(global, 'XMLHttpRequest').mockImplementation(() => {
      return new XMLHttpRequest() as any
    });
  })
  afterEach(() => {
    jest.clearAllMocks();
  });
  initXml(DIC_URL)
  setXmlResMagicFormat([
    ['item1', 'item2']
  ])
  getAuthorization(true)
  it('当数据已缓存时，直接返回缓存数据', async () => {
    const fldm = 'testFldm';
    const cachedData = ['item1', 'item2'];
    DICS[fldm] = Promise.resolve(cachedData); // 假设DICS是全局变量或可访问的
    const result = await dicget(fldm);

    expect(result).toEqual(cachedData);
    expect(global.XMLHttpRequest).toHaveBeenCalledTimes(0); // 验证ajaxPost没有被调用
  });

  it('当数据未缓存时，从服务器获取数据并缓存', async () => {
    const fldm = 'testFldm1';
    const result = await dicget(fldm);

    expect(result).toEqual(['item1', 'item2']);
    expect(await DICS[fldm]).toEqual(['item1', 'item2']); // 验证数据已被缓存
    expect(global.XMLHttpRequest).toHaveBeenCalledTimes(1); // 验证ajaxPost没有被调用
  });

  it('当服务器请求失败时，返回空数组', async () => {
    const fldm = 'testFldm2';
    const result = await dicget(fldm);
    expect(result).toEqual([]);
    expect(await DICS[fldm]).toEqual([]); // 验证数据已被缓存为[]
    expect(global.XMLHttpRequest).toHaveBeenCalledTimes(1); // 验证ajaxPost没有被调用
  });
})
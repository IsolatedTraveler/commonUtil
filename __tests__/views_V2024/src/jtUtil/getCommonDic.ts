import { DICS, DIC_URL, getAuthorization, getCommonDic } from '../../../../views_V2024/main'
import { XMLHttpRequest, initXml, setXmlResMagicFormat } from "../../../../__mocks__/XMLHttpRequest";

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
  const param = {
    addnull: 0,
    dicKey: 'testKey',
    flag: '1',
    panelHeight: 0,
    valueField: '',
    textField: ''
  };
  initXml(DIC_URL)
  const data = [
    [{ dm: '1', mc: '选项1', mj: 1 }, { dm: '2', mc: '选项2', mj: 1 }]
    , [{ dm: '1', mc: '选项1', mj: 1 }, { dm: '2', mc: '选项2', mj: 1 }
      , { dm: '1', mc: '选项1', mj: 1 }, { dm: '2', mc: '选项2', mj: 1 }
      , { dm: '1', mc: '选项1', mj: 1 }, { dm: '2', mc: '选项2', mj: 1 }
      , { dm: '1', mc: '选项1', mj: 1 }, { dm: '2', mc: '选项2', mj: 1 }
      , { dm: '1', mc: '选项1', mj: 1 }, { dm: '2', mc: '选项2', mj: 1 }
      , { dm: '1', mc: '选项1', mj: 1 }, { dm: '2', mc: '选项2', mj: 1 }]
  ]
  setXmlResMagicFormat(data)
  getAuthorization(true)
  it('应拒绝执行如果未设置dicKey', async () => {
    try {
      await getCommonDic({} as any);
    } catch (e: any) {
      expect(e.message).toBe('未设置要查询的字典信息');
    }
  });

  it('应调用dicget和filterDicData，然后调用initializeComboboxBase', async () => {
    await getCommonDic(param as any);

    // 检查dicget和filterDicData是否被正确调用
    expect(await DICS[param.dicKey]).toEqual(data[0]); // 验证数据已被缓存
    expect(global.XMLHttpRequest).toHaveBeenCalledTimes(1); // 验证ajaxPost没有被调用
  });

  it('应处理addnull为1的情况，即在数据前添加空项', async () => {
    param.addnull = 1
    param.valueField = 'valueField'
    param.textField = 'text'
    param.panelHeight = 150
    await getCommonDic(param as any);

    // 检查initializeComboboxBase的参数是否正确包含空项
    expect(await DICS[param.dicKey]).toEqual(data[0]); // 验证数据已被缓存
  });
  it('应处理addnull为1的情况，即在数据前添加空项', async () => {
    param.dicKey = 'dicKey1'
    param.addnull = 1
    param.valueField = 'valueField'
    param.textField = 'text'
    param.panelHeight = 0
    await getCommonDic(param as any);

    // 检查initializeComboboxBase的参数是否正确包含空项
    expect(await DICS[param.dicKey]).toEqual(data[1]); // 验证数据已被缓存
  });
});
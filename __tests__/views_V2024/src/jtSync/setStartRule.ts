import { XMLHttpRequest, initXml, setXmlRes } from '../../../../__mocks__/XMLHttpRequest';
import { setLoaction } from '../../../../__mocks__/location';
import { setStartRule, startRule, dicUrl } from '../../../../views_V2024/main'

global.XMLHttpRequest = XMLHttpRequest as any
describe('setStartRule Function', () => {
  beforeEach(() => setLoaction());
  afterEach(() => {
    // 确保每次测试后清理模拟，避免测试间互相影响
    jest.clearAllMocks();
  });
  it('should set startRule correctly after promise resolves', async () => {
    initXml(dicUrl)
    setXmlRes([{ cs: true }])
    // 调用函数并等待异步操作完成
    await setStartRule();
    // 验证 startRule 是否被正确赋值
    expect(startRule).toEqual({ cs: true });
  });
});
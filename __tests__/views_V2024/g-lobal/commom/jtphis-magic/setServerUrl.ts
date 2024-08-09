import { setLoaction } from "../../../../../__mocks__/location";
import { setServerUrl, setConfig } from "../../../../../views_V2024/g-lobal/common/system/jtphis-magic";
let href: string
describe('setServerUrl function', () => {
  beforeEach(() => setLoaction(href));
  afterEach(() => {
    // 确保每次测试后清理模拟，避免测试间互相影响
    jest.clearAllMocks();
  });
  it('测试未配置服务时使用基础服务', async () => {
    const res = setServerUrl()
    expect(res).toEqual('http://127.0.0.1:8020/his-flie/sc/')
  });
  it('测试配置服务时使用配置服务', async () => {
    setConfig({ magicServer: 'http://127.0.0.1:8020/jtmis' })
    const res = setServerUrl()
    expect(res).toEqual('http://127.0.0.1:8020/jtmis/')
  });
  it('测试配置服务时使用配置服务', async () => {
    setConfig({ magicServer: 'http://127.0.0.1:8020/jtmis1/' })
    const res = setServerUrl()
    expect(res).toEqual('http://127.0.0.1:8020/jtmis1/')
  });
  it('测试配置服务时使用配置服务', async () => {
    setConfig({ magicServer: 'http://127.0.0.1:8020' })
    const res = setServerUrl()
    expect(res).toEqual('http://127.0.0.1:8020/')
  });
})
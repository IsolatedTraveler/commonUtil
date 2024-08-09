import { setLoaction } from "../../../../../__mocks__/location";
import { setServerUrl } from "../../../../../views_V2024/g-lobal/common/system/jtphis-magic";
let href: string
describe('setServerUrl function', () => {
  beforeEach(() => setLoaction(href));
  afterEach(() => {
    // 确保每次测试后清理模拟，避免测试间互相影响
    jest.clearAllMocks();
  });
  it('应使用正确的参数调用getXhr并处理响应', async () => {
    const res = setServerUrl()
    expect(res).toEqual('http://127.0.0.1:8020/his-flie/sc/')
  });
})
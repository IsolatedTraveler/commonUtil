import { XMLHttpRequest } from "../../../../../__mocks__/XMLHttpRequest";
import { setLoaction } from "../../../../../__mocks__/location";
import { Authorization, getAuthorization } from "../../../../../views_V2024/g-lobal/common/xhr/magic/var";
global.XMLHttpRequest = XMLHttpRequest as any
describe('getAuthorization Function', () => {
  beforeEach(() => setLoaction());
  afterEach(() => {
    // 确保每次测试后清理模拟，避免测试间互相影响
    jest.clearAllMocks();
  });
  it('鉴权信息获取成功时，应正确设置Authorization', async () => {
    // 执行鉴权检查
    sessionStorage.setItem('Authorization', 'cs')
    await getAuthorization(true);
    expect(Authorization).toBe('cs');
  });
  it('鉴权失败，应有合理的错误处理', async () => {
    // 执行鉴权检查
    sessionStorage.removeItem('Authorization')
    await getAuthorization(true);
    expect(Authorization).toBe(true);
  });
  it('鉴权请求失败，应有合理的错误处理', async () => {
    // 执行鉴权检查
    sessionStorage.setItem('state', 'timeout')
    await getAuthorization(true);
    expect(Authorization).toBe(true);
  });
});
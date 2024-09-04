import {XMLHttpRequest} from '../../../../../__mocks__/XMLHttpRequest';
import {checkAuth} from '../../../../../views_V2024/g-lobal/common/';
import {XHR_JQ_URL} from '../../../../../views_V2024/g-lobal/common/xhr/magic/var';
global.XMLHttpRequest = XMLHttpRequest as any;
describe('checkAuth function', () => {
  it('当URL等于XHR_JQ_URL时应立即返回true', async () => {
    const result = await checkAuth(XHR_JQ_URL, {}, {});
    expect(result).toBe(true);
  });
  it('should return false immediately when isCheck is false', async () => {
    const result = await checkAuth('anyUrl', {}, {isCheck: false, reset: true});
    expect(result).toBe(false);
  });
  it('获取授权，并在需要时将其添加到标头中', async () => {
    // 准备测试数据
    const url = 'testUrl';
    const config: any = {};
    sessionStorage.setItem('Authorization', 'checkAuth');
    const authParams = {isCheck: true, reset: true};
    const promise = await checkAuth(url, config, authParams);
    // 验证config.headers被正确设置
    expect(config.headers).toEqual({accessToken: 'checkAuth'});
    // 验证最终返回值
    expect(promise).toBe(true);
  });

  it('当已通过身份验证且未重置时，不应获取授权', async () => {
    const url = 'anotherUrl';
    const config: any = {};
    sessionStorage.setItem('Authorization', 'checkAuth1');
    const authParams = {isCheck: true, reset: false};
    // 执行函数，由于已认证且不需要重置，预期不会调用getAuthorization
    await checkAuth(url, config, authParams);
    expect(config.headers).toEqual({accessToken: 'checkAuth'});
  });
});

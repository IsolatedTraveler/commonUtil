import {setLoaction} from '../../../../../__mocks__/location';
import {setConfig, setServerUrl} from '../../../../../views_V2024/g-lobal';
let href: string;
describe('setServerUrl function', () => {
  beforeEach(() => setLoaction(href));
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('测试未配置服务时使用基础服务', async () => {
    const res = setServerUrl();
    expect(res).toEqual('http://127.0.0.1:8020/his-flie/sc/');
  });

  it('测试配置服务时使用配置服务', async () => {
    setConfig({magicServer: 'http://127.0.0.1:8020/jtmis'});
    const res = setServerUrl();
    expect(res).toEqual('http://127.0.0.1:8020/jtmis/');
  });

  it('测试配置服务时使用配置服务 (路径以斜杠结尾)', async () => {
    setConfig({magicServer: 'http://127.0.0.1:8020/jtmis1/'});
    const res = setServerUrl();
    expect(res).toEqual('http://127.0.0.1:8020/jtmis1/');
  });

  it('测试配置服务时使用配置服务 (路径不以斜杠结尾)', async () => {
    setConfig({magicServer: 'http://127.0.0.1:8020'});
    const res = setServerUrl();
    expect(res).toEqual('http://127.0.0.1:8020/');
  });

  it('测试配置服务时使用配置服务 (路径包含文件扩展名)', async () => {
    setConfig({magicServer: 'http://127.0.0.1:8020/index.html'});
    const res = setServerUrl();
    expect(res).toEqual('http://127.0.0.1:8020/index.html');
  });

  it('测试配置服务时使用配置服务 (路径不以斜杠结尾且不包含文件扩展名)', async () => {
    setConfig({magicServer: 'http://127.0.0.1:8020/api'});
    const res = setServerUrl();
    expect(res).toEqual('http://127.0.0.1:8020/api/');
  });
});

import { XMLHttpRequest, initXml, setXmlRes } from "../../../../../__mocks__/XMLHttpRequest";
import { config } from "../../../../../__mocks__/config";
import { CONFIG_URL, setConfigData } from "../../../../../views_V2024/g-lobal/common/system/jtphis-magic/var";
global.XMLHttpRequest = XMLHttpRequest as any
describe('setConfigData function', () => {
  it('应使用正确的参数调用getXhr并处理响应', async () => {
    initXml(CONFIG_URL)
    setXmlRes([config])
    sessionStorage.setItem('xml', 'session')
    const res = await setConfigData();
    expect(res).toEqual(config)
  });
})
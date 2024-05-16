import { getConfig } from "../../../../../views_V2024/g-lobal/common/system";

import { XMLHttpRequest, getXmlCalc, initXml, setXmlRes } from "../../../../../__mocks__/XMLHttpRequest";
import { config } from "../../../../../__mocks__/config";
import { CONFIG_URL } from "../../../../../views_V2024/g-lobal/common/system/jtphis-magic/var";
global.XMLHttpRequest = XMLHttpRequest as any
describe('setConfigData function', () => {
  it('测试获取config', async () => {
    initXml(CONFIG_URL)
    setXmlRes([config])
    sessionStorage.setItem('xml', 'session')
    const v = await getConfig();
    expect(v).toEqual(config)
    const res = getXmlCalc()
    expect(res.xhrUrl).toBe('1')
  });
  it('测试获取config[key]', async () => {
    initXml(CONFIG_URL)
    setXmlRes([config])
    sessionStorage.setItem('xml', 'session')
    const v = await getConfig('magicServer');
    expect(v).toEqual(config.magicServer)
    const res = getXmlCalc()
    expect(res.xhrUrl).toBe('0')
  });
})
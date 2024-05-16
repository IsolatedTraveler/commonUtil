import { XMLHttpRequest, initXml, setXmlRes } from "../../../../../__mocks__/XMLHttpRequest";
import { config } from "../../../../../__mocks__/config";
import { CONFIG_URL, setConfigData } from "../../../../../views_V2024/g-lobal/common/system/jtphis-magic/var";
global.XMLHttpRequest = XMLHttpRequest as any
describe('setConfigData function', () => {
  it('should call getXhr with correct parameters and handle response', async () => {
    initXml(CONFIG_URL)
    setXmlRes([config])
    sessionStorage.setItem('xml', 'session')
    const res = await setConfigData();
    expect(res).toEqual(config)
  });
})
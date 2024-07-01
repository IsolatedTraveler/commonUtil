import { DZPJ_PZXX_URL, getDzpjKpRes } from '../../../../views_V2024/main'
import { XMLHttpRequest, initXml, setXmlResFormat } from "../../../../__mocks__/XMLHttpRequest"
import { setLoaction } from "../../../../__mocks__/location";
global.XMLHttpRequest = XMLHttpRequest as any
describe('getDzpjKpRes function', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    setLoaction()
  });
  afterEach(() => {
    // 确保每次测试后清理模拟，避免测试间互相影响
    jest.clearAllMocks();
  });
  it('开票成功，无bbid', async () => {

  })
  it('开票成功，有bbid，提示打印，确认打印', async () => {

  })
  it('开票成功，有bbid，提示打印，取消打印', async () => {

  })
  it('开票成功，有bbid，自动打印', async () => {

  })
  it('开票成功，有bbid，不打印', async () => {

  })
});
import { XMLHttpRequest } from '../../../../__mocks__/XMLHttpRequest';
import { setLoaction } from '../../../../__mocks__/location';
import { getFbdq, organization, region } from '../../../../views_V2024/main'

global.XMLHttpRequest = XMLHttpRequest as any
describe('getFbdq Function', () => {
  beforeEach(() => setLoaction());
  afterEach(() => {
    // 确保每次测试后清理模拟，避免测试间互相影响
    jest.clearAllMocks();
  });
  const ryxx = { jgid: '70' };
  it('should set organization and region correctly', async () => {
    await import('../../../../views_V2024/g-lobal').then(async ({ session }) => {
      session('userinfo', { ryxx })
      await getFbdq();
      expect(organization).toBe('70');
      expect(region).toBe('nm');
    })
  })
});
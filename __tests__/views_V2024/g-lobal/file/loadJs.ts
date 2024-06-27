import { jquery } from "../../../../__mocks__/jquery";
import { loadJs } from "../../../../views_V2024/main";
describe('loadJs function', () => {
  const $: any = jquery
  beforeEach(() => {
  })
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should load JavaScript file successfully', async () => {
    (global as any).$ = $
    const res = await loadJs('/path/to/script.js');
    expect(res).toBe('success')
  });
});
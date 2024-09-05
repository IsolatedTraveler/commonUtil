import {exeCategory, judgeLoad} from '../../../../views_V2024/main';
(window as any).jt_third_cs = {init() {}};
describe('exeCategory function', () => {
  beforeEach(() => {
    jest.spyOn((window as any).jt_third_cs, 'init').mockImplementation(() => {});
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  (judgeLoad as any).cs = Promise.resolve({loaded: true});
  it('测试init方法存在', async () => {
    await exeCategory('cs', 'init', {type: 'init'});
    expect((window as any).jt_third_cs.init).toHaveBeenCalledWith({type: 'init'}, {loaded: true});
  });
  it('测试init1方法不存在', async () => {
    try {
      await exeCategory('cs', 'init1', {});
    } catch (error: any) {
      // 确认错误被正确抛出并且是期望类型的错误
      expect(error).toBeInstanceOf(Error);
      // 确认错误消息内容正确
      expect(error.message).toBe('第三方插件未提供该方法init1');
    }
  });
});

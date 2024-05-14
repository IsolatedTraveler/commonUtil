import { errFormat } from '../../../../views_V2024/g-lobal'
describe('errFormat Function', () => {
  it('应能生成默认错误码的错误响应', () => {
    const errorResponse = errFormat('操作失败');
    expect(errorResponse).toEqual({ code: -1, message: '操作失败', data: null });
  });

  it('应能生成自定义错误码的错误响应', () => {
    const errorResponse = errFormat('资源未找到', 0);
    expect(errorResponse).toEqual({ code: 0, message: '资源未找到', data: null });
  });

  it('应正确处理空消息字符串', () => {
    const emptyMessageResponse = errFormat('');
    expect(emptyMessageResponse).toEqual({ code: -1, message: '', data: null });
  });
});
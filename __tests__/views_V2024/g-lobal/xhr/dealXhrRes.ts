import { dealXhrRes } from '../../../../views_V2024/g-lobal/main'
describe('dealXhrRes Function', () => {
  it('处理成功的HTTP响应（200-299状态码）且响应为JSON格式', () => {
    // 模拟一个成功的xhr对象
    const mockXhr = {
      status: 200,
      responseText: '{"code":1,"message":"操作成功","data":{"id":123}}'
    };

    const result = dealXhrRes(mockXhr as XMLHttpRequest);

    expect(result).toEqual({
      code: 1,
      message: '操作成功',
      data: { id: 123 }
    });
  });

  it('处理成功的HTTP响应但响应不是JSON格式', () => {
    const mockXhr = {
      status: 200,
      responseText: '这是一个文本响应'
    };

    const result = dealXhrRes(mockXhr as XMLHttpRequest);

    expect(result).toBe('这是一个文本响应');
  });

  it('处理HTTP错误状态码（400为例）', () => {
    const mockXhr = {
      status: 400,
      responseText: ''
    };

    const result = dealXhrRes(mockXhr as XMLHttpRequest);

    expect(result).toEqual({
      code: -1,
      message: '请求失败：客户端请求的语法错误，服务器无法理解请求',
      data: null
    });
  });

  it('处理JSON解析错误的情况', () => {
    const mockXhr = {
      status: 200,
      responseText: '{"code":1,"message":"操作成功"-}'
    };

    // 这里可能不会直接捕获到解析错误，因为try-catch在函数内部，但在实际应用中，可以间接验证错误处理逻辑
    const result = dealXhrRes(mockXhr as XMLHttpRequest);
    expect(result).toBe('{"code":1,"message":"操作成功"-}');
  });
});
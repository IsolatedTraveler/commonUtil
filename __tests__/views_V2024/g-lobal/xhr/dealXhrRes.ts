import {dealXhrRes} from '../../../../views_V2024/g-lobal/main';

describe('dealXhrRes Function', () => {
  it('处理成功的HTTP响应（200-299状态码）且响应为JSON格式', () => {
    const mockXhr = {
      status: 200,
      responseText: '{"code":"1","message":"操作成功","data":{"id":123}}'
    };
    const result = dealXhrRes(mockXhr as XMLHttpRequest);
    expect(result).toEqual({
      code: 1,
      message: '操作成功',
      data: {id: 123}
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
      responseText: '{"code":1,"message":"操作成功"-}' // 无效的JSON
    };
    const result = dealXhrRes(mockXhr as XMLHttpRequest);
    expect(result).toBe('{"code":1,"message":"操作成功"-}');
  });

  it('处理 `code` 字段为字符串 `1` 的情况', () => {
    const mockXhr = {
      status: 200,
      responseText: '{"code":"1","message":"操作成功"}'
    };
    const result = dealXhrRes(mockXhr as XMLHttpRequest);
    expect(result).toEqual({
      code: 1,
      message: '操作成功',
      data: undefined
    });
  });

  it('处理 `code` 字段为数字 `1` 的情况', () => {
    const mockXhr = {
      status: 200,
      responseText: '{"code":1,"message":"操作成功"}'
    };
    const result = dealXhrRes(mockXhr as XMLHttpRequest);
    expect(result).toEqual({
      code: 1,
      message: '操作成功',
      data: undefined
    });
  });

  it('处理其他HTTP错误状态码（例如 404）', () => {
    const mockXhr = {
      status: 404,
      responseText: ''
    };
    const result = dealXhrRes(mockXhr as XMLHttpRequest);
    expect(result).toEqual({
      code: -1,
      message: '请求失败：请求服务不存在',
      data: null
    });
  });

  it('处理服务器内部错误（例如 500）', () => {
    const mockXhr = {
      status: 500,
      responseText: ''
    };
    const result = dealXhrRes(mockXhr as XMLHttpRequest);
    expect(result).toEqual({
      code: -1,
      message: '请求失败：服务器遇到了不知道如何处理的情况',
      data: null
    });
  });
});

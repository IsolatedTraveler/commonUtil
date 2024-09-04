import {setLoaction} from '../../../../../__mocks__/location';
import {dealRequestData, session, setUser} from '../../../../../views_V2024/g-lobal';
describe('dealRequestData Function', () => {
  beforeEach(() => setLoaction());
  afterEach(() => {
    jest.clearAllMocks();
  });

  session('userinfo', {
    ryxx: {
      ryid: '123',
      jgid: '456',
      jgmc: '公司名称',
      jgjc: '公司简称',
      yhm: 'username',
      username: '张三',
      superadmin: false
    }
  });

  it('不包含用户信息且不处理分页参数，直接包装数据', () => {
    const data = {key: 'value'};
    const result = dealRequestData(data, {isNotGetUser: true});
    expect(result).toBe('{"data":{"key":"value"}}');
  });

  it('包含用户信息，应合并用户信息', () => {
    const data = {otherKey: 'otherValue'};
    const result = dealRequestData(data);
    expect(result).toContain('"czryid":"123"');
    expect(result).toContain('"czryjgid":"456"');
    expect(result).toContain('"czryjgmc":"公司名称"');
    expect(result).toContain('"czryjgjc":"公司简称"');
    expect(result).toContain('"czryyhm":"username"');
    expect(result).toContain('"czryxm":"张三"');
    expect(result).toContain('"superadmin":false');
    expect(result).toContain('"otherKey":"otherValue"');
  });

  it('处理分页参数，应转换为 page 和 size', () => {
    const data = {pageNumber: 2, pageSize: 10};
    const result = dealRequestData(data);
    expect(result).toContain('"page":2');
    expect(result).toContain('"size":10');
  });

  it('处理分页参数，应转换为 page 和 size', () => {
    const data = {page: 2, size: 10};
    const result = dealRequestData(data);
    expect(result).toContain('"page":2');
    expect(result).toContain('"size":10');
  });

  it('指定不包装数据，应直接返回未经包装的JSON字符串', () => {
    const data = {testKey: 'testValue'};
    const option = {isNotWrapped: true, isNotGetUser: true};
    const result = dealRequestData(data, option);
    expect(result).toBe('{"testKey":"testValue"}');
  });

  it('当用户信息不存在时，不合并用户信息', () => {
    const data = {otherKey: 'otherValue'};
    const option = {isNotGetUser: false};
    session('userinfo', {ryxx: null}); // 模拟用户信息不存在
    setUser();
    const result = dealRequestData(data, option);
    expect(result).toBe('{"data":{"otherKey":"otherValue"}}');
  });

  it('当分页参数都不存在时，不修改分页参数', () => {
    const data = {otherKey: 'otherValue'};
    const result = dealRequestData(data);
    expect(result).toContain('"otherKey":"otherValue"');
    expect(result).not.toContain('"page":1');
    expect(result).not.toContain('"size":10');
  });

  it('当分页参数page和size都存在时，不修改分页参数', () => {
    const data = {page: 2, size: 10, otherKey: 'otherValue'};
    const result = dealRequestData(data);
    expect(result).toContain('"page":2');
    expect(result).toContain('"size":10');
    expect(result).toContain('"otherKey":"otherValue"');
  });

  it('当分页参数pageNumber和pageSize都存在时，不修改分页参数', () => {
    const data = {pageNumber: 2, pageSize: 10, otherKey: 'otherValue'};
    const result = dealRequestData(data);
    expect(result).toContain('"page":2');
    expect(result).toContain('"size":10');
    expect(result).toContain('"otherKey":"otherValue"');
  });

  it('当分页参数只有page存在时，不修改分页参数', () => {
    const data = {page: 2, otherKey: 'otherValue'};
    const result = dealRequestData(data);
    expect(result).toContain('"page":2');
    expect(result).not.toContain('"size":10');
    expect(result).toContain('"otherKey":"otherValue"');
  });

  it('当分页参数只有size存在时，不修改分页参数', () => {
    const data = {size: 10, otherKey: 'otherValue'};
    const result = dealRequestData(data);
    expect(result).not.toContain('"page":1');
    expect(result).toContain('"size":10');
    expect(result).toContain('"otherKey":"otherValue"');
  });
});

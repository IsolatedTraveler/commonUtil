import {getSystem, session} from '../../../../../views_V2024/main';
let data: any = {};
const varget = (_a: string, _b: string) => {
  return data[_b];
};
const varpost = (_a: string, _b: string, _v: string) => {
  data[_b] = _v;
};
const jthis = {varget, varpost};
let jthisJsObject: any = {jthis};
describe('session Function', () => {
  beforeEach(() => {
    jest.spyOn(jthis, 'varget').mockImplementation(varget as any);
    jest.spyOn(jthis, 'varpost').mockImplementation(varpost as any);
    (window as any).jthisJsObject = jthisJsObject;
  });

  afterEach(() => {
    (window as any).jthisJsObject = undefined;
    jest.clearAllMocks();
  });

  it('sessionStorage设置值', () => {
    const key = 'testKey';
    const value = {data: '测试数据'};
    session(key, value); // 设置值
    expect(jthis.varget).not.toHaveBeenCalled(); // `varget` 不应该被调用
    expect(jthis.varpost).not.toHaveBeenCalled(); // `varpost` 不应该被调用
    expect(session(key)).toEqual(value); // 验证获取的值是否与设置的一致
  });

  it('sessionStorage移除值', () => {
    const key = 'testKey';
    session(key, null); // 设置值
    expect(jthis.varget).not.toHaveBeenCalled(); // `varget` 不应该被调用
    expect(jthis.varpost).not.toHaveBeenCalled(); // `varpost` 不应该被调用
    expect(session(key)).toBeNull(); // 验证获取的值是否与设置的一致
  });

  it('应能正确设置和获取sessionStorage的值', () => {
    getSystem();
    const key = 'testKey1';
    const value = {data: '测试数据'};
    session(key, value); // 设置值
    expect(jthis.varpost).toHaveBeenCalledWith('that', key, JSON.stringify(value)); // 检查 `varpost` 被调用时的参数
    expect(session(key)).toEqual(value); // 验证获取的值是否与设置的一致
    expect(jthis.varget).toHaveBeenCalledWith('that', key); // 检查 `varget` 被调用时的参数
  });

  it('当传入null时，应能删除对应的sessionStorage项', () => {
    getSystem();
    const key = 'testKey1';
    session(key, {data: '将被删除的数据'}); // 先设置一个值
    session(key, null); // 删除
    expect(jthis.varpost).toHaveBeenCalledWith('that', key, 'null'); // 检查 `varpost` 被调用时的参数
    expect(session(key)).toBeNull(); // 再次获取也应为null
    expect(jthis.varget).toHaveBeenCalledWith('that', key); // 检查 `varget` 被调用时的参数
    expect(session(key + 1)).toBeNull(); // 再次获取也应为null
    expect(jthis.varget).toHaveBeenCalledWith('that', key + 1); // 检查 `varget` 被调用时的参数
  });
});

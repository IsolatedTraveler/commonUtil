
describe('session Function', () => {
  var data:any = {}
  const varget = (_a: string, _b: string) => {
    return data[_b]
  },
  varpost = (_a:string, _b:string,_v:string) => {
    data[_b] = _v
  }
  var jthisJsObject: any = { jthis: { varget,varpost } }
  beforeEach(() => {
    if (jthisJsObject) {
      jest.spyOn(jthisJsObject.jthis, 'varget').mockImplementation((_a:any, b:any) => { return data[b] });
      jest.spyOn(jthisJsObject.jthis, 'varpost').mockImplementation((_a:any, b:any, v:any) => { data[b] = v });
    }
    (window as any).jthisJsObject = jthisJsObject
  })
  afterEach(() => {
    (window as any).jthisJsObject = undefined
    jest.clearAllMocks()
  });
  it('应能正确设置和获取sessionStorage的值', () => {
    import('../../../../../views_V2024/g-lobal').then(({session}) => {
      const key = 'testKey';
      const value = { data: '测试数据' };
      session(key, value); // 设置值
      expect(session(key)).toEqual(value); // 验证获取的值是否与设置的一致
    })
  });

  it('当传入null时，应能删除对应的sessionStorage项', () => {
    import('../../../../../views_V2024/g-lobal').then(({session}) => {
      const key = 'testKey3';
      session(key, { data: '将被删除的数据' }); // 先设置一个值
      session(key, null); // 删除
      expect(session(key)).toBeNull(); // 再次获取也应为null
      expect(session('testKey4')).toBeNull(); // 再次获取也应为null
    })
  });
});
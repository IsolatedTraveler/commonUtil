describe('setUser function', () => {
  const varget = (_a: string, _b: string) => {
    return '{"username":"testUser","role":"admin"}'
  }
  var jthisJsObject: any = { jthis: { varget } }
  beforeEach(() => {
    if (jthisJsObject) {
      jest.spyOn(jthisJsObject.jthis, 'varget').mockImplementation(() => { return '{"username":"testUser","role":"admin"}' });
    }
    (window as any).jthisJsObject = jthisJsObject
  })
  afterEach(() => {
    (window as any).jthisJsObject = undefined
    jest.clearAllMocks()
  });
  it('如定义window.jthisJsObject.jthis时应返回', async () => {
    await import('../../../../../views_V2024/g-lobal').then(({ setUser }) => {
      const v = setUser()
      expect(v).toEqual({ "username": "testUser", "role": "admin" })
    });
  })
})
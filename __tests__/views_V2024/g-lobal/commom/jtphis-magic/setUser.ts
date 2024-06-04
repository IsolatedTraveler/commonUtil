describe('setUser function', () => {
  const ryxx = { cs: 'cs' };
  it('如未定义window.jthisJsObject.jthis时应返回session中的数据', async () => {
    await import('../../../../../views_V2024/g-lobal').then(({ setUser, session }) => {
      session('userinfo', { ryxx })
      const v = setUser()
      expect(v).toEqual(ryxx)
    })
  })
})
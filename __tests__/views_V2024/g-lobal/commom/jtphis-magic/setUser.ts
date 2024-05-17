import { SYSTEM, session, setUser } from "../../../../../views_V2024/g-lobal"
const ryxx = { cs: 'cs' };
describe('setUser function', () => {
  session('userinfo', { ryxx })
  it('如未定义window.jthisJsObject.jthis时应返回Undefined', () => {
    (window as any).jthisJsObject = {} as any
    const v = setUser()
    expect(v).toEqual(ryxx)
  })
})
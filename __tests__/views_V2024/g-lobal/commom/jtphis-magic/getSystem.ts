import { getSystem } from "../../../../../views_V2024/g-lobal/common/system";
describe('getSystem function', () => {
  it('如未定义window.jthisJsObject时应返回Undefined', () => {
    (window as any).jthisJsObject = undefined
    const v = getSystem()
    expect(v).toBeUndefined()
  })
  it('如未定义window.jthisJsObject.jthis时应返回Undefined', () => {
    (window as any).jthisJsObject = {} as any
    const v = getSystem()
    expect(v).toBeUndefined()
  })
  it('如已定义window.jthisJsObject.jthis时应返回jthis', () => {
    (window as any).jthisJsObject = { jthis: {} } as any
    const v = getSystem()
    expect(v).toEqual({})
  })
})
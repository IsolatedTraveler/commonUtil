import { domKeydown, SHORTCUT_KEYS } from '../../../../views_V2024/main'
(window as any).$ = require('jquery/dist/jquery.js')
const event: any = {
  code: 'Backspace',
  target: document.createElement('input'),
  preventDefault: () => { }
}
SHORTCUT_KEYS['F12'] = () => { }
SHORTCUT_KEYS['F11'] = () => {
  throw '测试'
}
describe('domKeydown function', () => {
  beforeEach(() => {
    jest.spyOn(window, 'alert').mockImplementation(() => { });
    jest.spyOn(event, 'preventDefault').mockImplementation(() => { });
    jest.spyOn(SHORTCUT_KEYS, 'F12').mockImplementation(() => { });
    jest.spyOn(SHORTCUT_KEYS, 'F11').mockImplementation(() => { throw '测试' });
  })
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('测试INPUT元素', () => {
    domKeydown(event)
    expect(event.preventDefault).toHaveBeenCalledTimes(0)
  });
  it('测试INPUT元素disabled', () => {
    event.target.setAttribute('disabled', true)
    domKeydown(event)
    expect(event.preventDefault).toHaveBeenCalledTimes(1)
  });
  it('测试INPUT元素readonly', () => {
    event.target = document.createElement('input')
    event.target.setAttribute('readonly', true)
    domKeydown(event)
    expect(event.preventDefault).toHaveBeenCalledTimes(1)
  });
  it('测试DIV的disabled属性', () => {
    event.target = document.createElement('div')
    event.target.contentEditable = 'true'
    event.target.setAttribute('disabled', true)
    domKeydown(event)
    expect(event.preventDefault).toHaveBeenCalledTimes(1)
  })
  it('测试DIV的readonly属性', () => {
    event.target = document.createElement('div')
    event.target.contentEditable = 'true'
    event.target.setAttribute('readonly', true)
    domKeydown(event)
    expect(event.preventDefault).toHaveBeenCalledTimes(1)
  })
  it('测试P', () => {
    event.target = document.createElement('p')
    domKeydown(event)
    expect(event.preventDefault).toHaveBeenCalledTimes(1)
  })
  it('测试报错正常执行快捷键', () => {
    event.code = 'F12'
    domKeydown(event)
    expect(SHORTCUT_KEYS['F12']).toHaveBeenCalledTimes(1)
  })
  it('测试报错情况下是否正常执行', () => {
    event.code = 'F11'
    domKeydown(event)
    expect(SHORTCUT_KEYS['F11']).toHaveBeenCalledTimes(1)
  })
});
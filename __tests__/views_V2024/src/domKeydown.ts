import { domKeydown, SHORTCUT_KEYS } from '../../../views_V2024/main'
(window as any).$ = require('jquery/dist/jquery.js')
const event: any = {
  code: 'Backspace',
  target: document.createElement('input'),
  preventDefault: () => { }
}
SHORTCUT_KEYS['F12'] = () => { }
describe('getTr function', () => {
  beforeEach(() => {
    jest.spyOn(window, 'alert').mockImplementation(() => { });
    jest.spyOn(event, 'preventDefault').mockImplementation(() => { });
    jest.spyOn(SHORTCUT_KEYS, 'F12').mockImplementation(() => { });
  })
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should find the tbody element correctly', () => {
    domKeydown(event)
    event.target = document.createElement('div')
    event.target.contentEditable = 'true'
    event.target.setAttribute('readonly', true)
    domKeydown(event)
    expect(event.preventDefault).toHaveBeenCalledTimes(1)
    event.target = document.createElement('p')
    domKeydown(event)
    expect(event.preventDefault).toHaveBeenCalledTimes(2)
    event.code = 'F12'
    domKeydown(event)
    expect(SHORTCUT_KEYS['F12']).toHaveBeenCalledTimes(1)
  });
});
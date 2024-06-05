import { initShortcutKey, domKeydown } from '../../../../views_V2024/main'
describe('initShortcutKey function', () => {
  let addEventListenerSpy: any;
  beforeAll(() => {
    // 在所有测试开始前，对 addEventListener 进行监视
    addEventListenerSpy = jest.spyOn(document, 'addEventListener');
  });
  afterAll(() => {
    // 所有测试完成后，清除 spy
    addEventListenerSpy.mockRestore();
  });
  it('should register domKeydown event listener on document', () => {
    initShortcutKey();
    expect(addEventListenerSpy).toHaveBeenCalledWith('keydown', domKeydown);
  });
});
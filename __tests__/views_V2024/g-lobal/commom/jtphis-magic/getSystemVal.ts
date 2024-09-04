import {getSystemVal, getSystem} from '../../../../../views_V2024/g-lobal/common/system';
function alert(_a: string) {}
function close() {}
function error() {}
function printreport(_a: any) {}
const jthis = {printreport};
let jthisJsObject: any = {jthis};
const layer: any = {alert, close};
const $: any = {messager: {alert}};
const console: any = {error};
describe('getSystemVal function', () => {
  beforeEach(() => {
    jest.spyOn(layer, 'alert').mockImplementation(alert as any);
    jest.spyOn(layer, 'close').mockImplementation(close as any);
    jest.spyOn($.messager, 'alert').mockImplementation(alert as any);
    jest.spyOn(console, 'error').mockImplementation(error as any);
    jest.spyOn(jthis, 'printreport').mockImplementation(printreport as any);
    window.alert = jest.fn(alert);
  });
  afterEach(() => {
    (window as any).layer = undefined;
    (window as any).$ = undefined;
    (window as any).console = undefined;
    (window as any).jthisJsObject = undefined;
    jest.clearAllMocks();
  });
  it('如未定义window.jthisJsObject时应报错', () => {
    (window as any).layer = layer;
    getSystem();
    getSystemVal('printreport', []);
    expect(layer.alert).toHaveBeenCalledWith('该方法依赖专有浏览器，请在专有浏览器中使用');
  });
  it('如已定义window.jthisJsObject.jthis时且未定义指定方法应报错', () => {
    (window as any).layer = layer;
    (window as any).jthisJsObject = jthisJsObject;
    getSystem();
    getSystemVal('printreport1', []);
    expect(layer.alert).toHaveBeenCalledWith('当前浏览器未定义该方法（printreport1），请联系厂家提供技术支持');
  });
  it('如已定义window.jthisJsObject.jthis时且已定义指定方法应调用该方法', () => {
    (window as any).jthisJsObject = jthisJsObject;
    getSystem();
    getSystemVal('printreport', ['123']);
    expect(jthis.printreport).toHaveBeenCalledWith('123');
  });
  it('如已定义window.jthisJsObject.jthis时且已定义指定方法应调用该方法', () => {
    (window as any).jthisJsObject = jthisJsObject;
    getSystem();
    getSystemVal('printreport');
    expect(jthis.printreport).toHaveBeenCalledWith();
  });
});

import { getTr } from '../../../views_V2024/main'
import { LAYUI_TABLE_HTML } from '../../../__mocks__/layui.tabl'
const $ = require('jquery/dist/jquery.js')
const elem = $(LAYUI_TABLE_HTML);
describe('getTr function', () => {
  it('should find the tbody element correctly', () => {
    // 创建一个jQuery对象来代表测试元素
    // 不直接传入main参数，测试默认行为
    const tbodyResult = getTr(elem, 1);
    // 断言找到了正确的tbody元素
    expect(tbodyResult.length).toBe(2);
    expect(tbodyResult[0].tagName.toLowerCase()).toBe('tr');
  });
});
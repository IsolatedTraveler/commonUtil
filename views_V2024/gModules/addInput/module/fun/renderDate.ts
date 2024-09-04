import {TableColDate} from 'GMAddInput';
import {popContentElem} from '../var';

export function renderDate({field, format, min, max}: TableColDate, i: number) {
  setTimeout(() => {
    window.layui.laydate.render({
      elem: popContentElem.find(`[ data-id="${i}"]`).eq(0),
      format: format || 'yyyy-MM-dd',
      min: min || '1800-01-01',
      max: max || '2099-01-01'
    });
  }, 10);
  return `<input type="text" class="layui-input" name="${field}" data-id="${i}">`;
}

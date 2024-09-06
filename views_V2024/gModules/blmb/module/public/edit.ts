import {jqueryPageElem} from '../var';

export function edit(judge: boolean) {
  jqueryPageElem.removeAttr('disabled');
  if (judge) {
    // 编辑页面
  }
}

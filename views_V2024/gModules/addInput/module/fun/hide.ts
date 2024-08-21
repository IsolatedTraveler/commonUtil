import {val} from '../public/val';
import {currentTable, popElem, id} from '../var';

export function hide(judge: boolean = false) {
  popElem.hide();
  if (judge && currentTable) {
    val(window.layui.table.cache[id] || []);
  }
}

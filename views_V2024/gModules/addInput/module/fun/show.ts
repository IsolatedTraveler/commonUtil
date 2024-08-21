import {currentTable, popElem, valInput} from '../var';
import {val} from '../public/val';

export function show() {
  popElem.show();
  if (currentTable) {
    val(valInput.val() || '');
  }
}

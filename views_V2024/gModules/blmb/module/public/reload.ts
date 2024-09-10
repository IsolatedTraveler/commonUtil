import {BlmbConfig} from 'GMBlmb';
import {judge, pageVal, setFootHtml, setPageHtml, setTitleHtml} from '../var';
import {getFoot, getTitle, setHtml, setMx} from '../fun';
import {val} from './val';
import {disabled} from './disabled';
import {edit} from './edit';

export function reload({cfbt, mbjcxxys, mbdyzz, mbztsl, mbztys, cols, mbjwxxys, footCols, disabled: isDisabled, isEdit, id}: BlmbConfig) {
  setPageHtml(mbdyzz, mbztsl, mbztys, cols, mbjcxxys, mbjwxxys, id);
  if (cfbt) {
    setTitleHtml(getTitle(cfbt));
  } else {
    setTitleHtml('');
  }
  if (footCols) {
    setFootHtml(getFoot(footCols));
  } else {
    setFootHtml('');
  }
  if (cols) {
    setMx(cols);
    setHtml();
    val(pageVal);
  } else if (judge) {
    setHtml();
    val(pageVal);
  }
  if (isDisabled) {
    disabled();
  } else {
    edit(isEdit);
  }
}

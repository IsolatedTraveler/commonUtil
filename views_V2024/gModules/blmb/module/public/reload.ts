import {BlmbConfig} from 'GMBlmb';
import {judge, pageVal, setFootHtml, setPageHtml, setTitleHtml} from '../var';
import {getFoot, getTitle, setHtml, setMx} from '../fun';
import {val} from './val';
import {disabled} from './disabled';
import {edit} from './edit';

export function reload({cfbt, mbjcxxys, mbdyzz, mbztsl, mbztys, cols, mbjwxxys, footCols, disabled: isDisabled, isEdit, id}: BlmbConfig, judge1 = false) {
  setPageHtml(mbdyzz, mbztsl, mbztys, cols, mbjcxxys, mbjwxxys, id);
  let judge2 = false;
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
    judge2 = true;
    setMx(cols);
  }
  if (judge || judge2) {
    setHtml();
    if (!judge1) {
      val(pageVal);
    }
  }
  if (isDisabled) {
    disabled();
  } else {
    edit(isEdit);
  }
}

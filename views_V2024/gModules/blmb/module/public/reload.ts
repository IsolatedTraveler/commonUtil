import {BlmbConfig} from 'GMBlmb';
import {pageVal, setFootHtml, setPageHtml, setTitleHtml} from '../var';
import {getFoot, getTitle, setHtml, setMx} from '../fun';
import {val} from './val';

export function reload({cfbt, mbjcxxys, mbdyzz, mbztsl, mbztys, id, cols, mbjwxxys, footCols}: BlmbConfig) {
  setPageHtml(id, mbdyzz, mbztsl, mbztys, cols, mbjcxxys, mbjwxxys);
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
  }
  setHtml();
  val(pageVal);
}

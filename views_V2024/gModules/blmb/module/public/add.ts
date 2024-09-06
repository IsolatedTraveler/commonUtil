import {BlmbMxCol} from 'GMBlmb';
import {BLMB_PAGE_ARR, pageCols} from '../var';
import {getCol, setHtml} from '../fun';

export function add(col: BlmbMxCol) {
  BLMB_PAGE_ARR[pageCols.length] = getCol(col);
  pageCols.push(col);
  setHtml();
}

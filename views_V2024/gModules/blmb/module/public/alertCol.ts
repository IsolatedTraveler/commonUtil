import {BlmbMxCol} from 'GMBlmb';
import {BLMB_PAGE_ARR, pageCols} from '../var';
import {getCol} from '../fun/getCol';
import {setHtml} from '../fun/setHtml';

export function alertCol(col: BlmbMxCol, i: number, judge = true) {
  if (i === undefined || i === null) {
    const len = pageCols.length;
    for (let j = 0; j < len; j++) {
      if (col.id === pageCols[j].id) {
        i = j;
        break;
      }
    }
  } else {
    pageCols[i] = col;
  }
  BLMB_PAGE_ARR[i] = getCol(col);
  if (judge) {
    setHtml();
  }
}

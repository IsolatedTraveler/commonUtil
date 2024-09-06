import {setHtml} from '../fun';
import {BLMB_PAGE_ARR, pageCols} from '../var';

export function del(id: string) {
  const len = pageCols.length;
  for (let j = 0; j < len; j++) {
    if (id === pageCols[j].id) {
      pageCols.splice(j, 1);
      BLMB_PAGE_ARR.splice(j, 1);
      break;
    }
  }
  setHtml();
}

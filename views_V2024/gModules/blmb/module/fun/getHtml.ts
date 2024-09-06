import {BLMB_PAGE_WRAP} from 'GMBlmb';
import {BLMB_PAGE, pageHtml} from '../var';

export function getHtml(arr: BLMB_PAGE[]): string {
  return arr
    .map(it => {
      if (typeof it !== 'string') {
        return getHtml(it);
      } else if (it === BLMB_PAGE_WRAP) {
        return '</page>' + pageHtml;
      } else {
        return it;
      }
    })
    .join('');
}

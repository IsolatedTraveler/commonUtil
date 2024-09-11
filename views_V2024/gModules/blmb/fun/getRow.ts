import {BLMB_TYPE} from '../var';
import {getArr} from './getArr';

export function getRow(cols: string[], styles: string[]): string {
  styles = getArr(styles);
  cols = getArr(cols).map((it, i) => {
    return `<div class="jt-flex-r" style="${styles[i] || ''}"><label>${it}</label><input class="jt-grow1" type="text" ></div>`;
  });
  styles = styles || [];
  return cols.join('');
}

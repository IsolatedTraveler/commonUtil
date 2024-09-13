import {getArr} from './getArr';

export function getRow(cols: string[], styles: string[], data: any = {}): string {
  styles = getArr(styles);
  cols = getArr(cols).map(({mc, name}: any, i) => {
    data[name] = '';
    return `<div class="jt-flex-r" style="${styles[i] || ''}"><label>${mc}</label><input class="jt-grow1" type="text" name="${name}" ></div>`;
  });
  styles = styles || [];
  return cols.join('');
}

import {BLMB_SELECTED, BLMB_TYPE} from 'GMBlmb';
import {jqueryPageElem} from '../var';

export function setVal(el: HTMLElement, key: string, val: any) {
  const type = el.dataset.type;
  switch (type) {
    case BLMB_TYPE[0]:
      // 多选
      jqueryPageElem.find(`[data-name="${key}"][data-val]`).removeClass(BLMB_SELECTED);
      (val || []).map((it: string) => {
        jqueryPageElem.find(`[data-name="${key}"][data-val="${it}"]`).addClass(BLMB_SELECTED);
      });
      break;
    case BLMB_TYPE[1]:
    case BLMB_TYPE[2]:
      // input输入
      (el as any).value = val;
      break;
    case BLMB_TYPE[3]:
      jqueryPageElem.find(`[data-name="${key}"][data-val]`).removeClass(BLMB_SELECTED);
      jqueryPageElem.find(`[data-name="${key}"][data-val="${val}"]`).addClass(BLMB_SELECTED);
      break;
    default:
      el.innerHTML = val;
  }
}

import {jqueryPageElem, pageVal, setPageVal} from '../var';
import {setVal} from '../fun';
import {BLMB_TYPE} from 'GMBlmb';

export function val(v: any) {
  if (v) {
    setPageVal(v);
    const keys = Object.keys(v);
    keys.forEach(key => {
      const el = jqueryPageElem.find(`[data-type][data-name="${key}"]`)[0];
      el && setVal(el, key, v[key]);
    });
  } else {
    $(`[data-type="${BLMB_TYPE[2]}"]`).each((_i, el) => {
      const name = el.dataset.name as string;
      pageVal[name] = (el as HTMLInputElement).value;
    });
    $(`[data-type="${BLMB_TYPE[4]}"]`).each((_i, el) => {
      const name = el.dataset.name as string;
      const data = pageVal[name] || [];
      el.querySelectorAll('input').forEach((el, i) => {
        data[i] = el.value;
      });
      pageVal[name] = data;
    });
    return pageVal;
  }
}

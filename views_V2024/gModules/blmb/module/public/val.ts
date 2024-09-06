import {jqueryPageElem, pageVal, setPageVal} from '../var';
import {setVal} from '../fun';

export function val(v: any) {
  if (v) {
    setPageVal(v);
    const keys = Object.keys(v);
    keys.forEach(key => {
      const el = jqueryPageElem.find(`[data-type][data-name="${key}"]`)[0];
      el && setVal(el, key, v[key]);
    });
  } else return pageVal;
}

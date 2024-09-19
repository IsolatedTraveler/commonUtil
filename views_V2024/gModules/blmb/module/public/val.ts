import {jqueryPageElem} from '../var';
import {setVal} from '../fun';

export function val(v: any) {
  const elems = jqueryPageElem.find(`[data-type][data-name]`),
    val = {};
  elems.each((_i, el) => {
    const d = el.dataset;
    setVal($(el), d.name as string, d.type as string, v, val);
  });
  return val;
}

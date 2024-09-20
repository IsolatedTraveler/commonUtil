import {BLMB_SELECTED, BLMB_TYPE} from 'GMBlmb';
import {jqueryPageElem} from '../var';

export function setVal(el: JQuery<HTMLElement>, key: string, type: string, importVal: any, exportVal: any) {
  var val = (importVal || {})[key];
  switch (type) {
    case BLMB_TYPE[0]: //multiSelect
      // 多选
      const elems = jqueryPageElem.find(`[data-name="${key}"][data-val]`);
      if (importVal && val) {
        elems.removeClass(BLMB_SELECTED);
        val.map((it: string) => {
          elems.filter(`[data-val="${it}"]`).addClass(BLMB_SELECTED);
        });
      }
      exportVal[key] = JSON.stringify([].map.call(elems.filter(`.${BLMB_SELECTED}`), (el: HTMLElement) => el.dataset.val));
      break;
    case BLMB_TYPE[1]: //textarea
    case BLMB_TYPE[2]: // input
      // input输入
      if (importVal && val !== undefined) {
        el.val(val || '');
      }
      exportVal[key] = el.val();
      break;
    case BLMB_TYPE[3]: //select
      const selectElems = jqueryPageElem.find(`[data-name="${key}"][data-val]`);
      if (importVal && val !== undefined) {
        selectElems.removeClass(BLMB_SELECTED);
        selectElems.filter(`[data-val="${val || ''}"]`).addClass(BLMB_SELECTED);
      }
      exportVal[key] = JSON.stringify([].map.call(selectElems.filter(`.${BLMB_SELECTED}`), (el: HTMLElement) => el.dataset.val)[0]);
      break;
    case BLMB_TYPE[4]: //print-row
      const rowElems = el.find('[name]');
      val = val || {};
      if (importVal) {
        rowElems.each((_i, e: any) => {
          const v = val[e.name] || importVal[e.name];
          if (v !== undefined) {
            e.value = v || '';
          }
        });
      }
      rowElems.each((_i, e: any) => {
        val[e.name] = e.value || '';
      });
      exportVal[key] = JSON.stringify(val);
      break;
    default:
      if (importVal && val !== undefined) {
        el.html(val);
      }
      exportVal[key] = el.html() || '';
  }
}

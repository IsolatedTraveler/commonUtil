import {BLMB_SELECTED, BLMB_TYPE} from 'GMBlmb';
import {pageVal, setPageVal} from '../var';

export function val(v: any) {
  if (v) {
    setPageVal(v);
    const keys = Object.keys(v);
    keys.forEach(key => {
      const el = $(`[data-type][data-name="${key}"]`)[0],
        type = el.dataset.type,
        val = v[key] || '';
      switch (type) {
        case BLMB_TYPE[0]:
          // 多选
          $(`[data-name="${key}"][data-val]`).removeClass(BLMB_SELECTED);
          (val || []).map((it: string) => {
            $(`[data-name="${key}"][data-val="${val}"]`).addClass(BLMB_SELECTED);
          });
          break;
        case BLMB_TYPE[1]:
          // input输入
          (el as any).value = val;
          break;
        default:
          el.innerHTML = val;
      }
    });
  } else return pageVal;
}

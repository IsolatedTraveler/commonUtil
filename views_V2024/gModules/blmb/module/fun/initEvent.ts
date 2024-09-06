import {BLMB_SELECTED, BLMB_TYPE_CLASS} from 'GMBlmb';
import {jqueryPageElem, pageVal} from '../var';

export function initEvent() {
  // 多选事件
  jqueryPageElem.on('click', `[data-name][data-val].${BLMB_TYPE_CLASS[0]}`, (e: JQuery.ClickEvent) => {
    const el = e.currentTarget,
      {name, val} = el.dataset,
      els = jqueryPageElem.find(`[data-name="${name}"][data-val="${val}"]`);
    if (els.hasClass(BLMB_SELECTED)) {
      els.removeClass(BLMB_SELECTED);
      pageVal[name] = pageVal[name].filter((it: any) => it !== val);
    } else {
      els.addClass(BLMB_SELECTED);
      pageVal[name] = pageVal[name] || [];
      pageVal[name].push(val);
    }
  });
  // input输入框事件
  jqueryPageElem.on('change', `[data-name].${BLMB_TYPE_CLASS[1]}`, (e: JQuery.ChangeEvent) => {
    const el = e.currentTarget,
      {name} = el.dataset;
    pageVal[name] = el.value;
  });
}

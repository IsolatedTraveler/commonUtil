import {BLMB_PAGE_WRAP} from '../var';

export function wrapPage(type: string, lx: string, {nr, id, bt}: any, cla: string, event: Function): string | string[] {
  switch (lx) {
    case '1':
      return [];
    case '2':
      return [];
    case '3':
      let first = nr.shift() || [],
        title = `<input type="hidden" data-type="${type}" data-name="${id}">`;
      if (bt) {
        title = `<p data-type="${type}" data-name="${id}" class="${cla}-title"><span class="print-circle">●</span><span>${bt}</span></p>`;
      }
      return [
        `${title}${event({nr: first, cla, id})}`,
        BLMB_PAGE_WRAP,
        (nr || [])
          .map((it: any) => {
            return event({nr: it || [], cla, id, judge: true});
          })
          .join(BLMB_PAGE_WRAP)
      ];
    default:
      return `未设置该类型【${lx}】翻页样式`;
  }
}

import {BLMB_PAGE_WRAP} from 'GMBlmb';

export function wrapPage(type: string, lx: string, {nr, id, bt}: any, cla: string, event: Function): string | string[] {
  switch (lx) {
    case '1':
      return [];
    case '2':
      return [];
    case '3':
      let first = nr.shift() || [];
      return [
        `<p  data-type="${type}" class="${cla}-title"><span class="print-circle">●</span><span>${bt}</span></p>${event({nr: first, cla, id})}`,
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

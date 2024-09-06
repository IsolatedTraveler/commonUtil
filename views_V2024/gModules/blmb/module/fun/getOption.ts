import {optionId, setOptionId} from '../var';

export function getOption({nr, cla, id, judge}: any): string {
  return (nr || [])
    .map((option: any, i: number) => {
      if (option) {
        let html,
          v = '',
          className = cla;
        if (typeof option === 'string') {
          v = option;
          html = `<p class="jt-grow1">${option}</p>`;
        } else if (typeof option.mc === 'string') {
          v = option.id || option.mc;
          html = `<p class="jt-grow1">${option.mc}</p>`;
        } else {
          let mc = option.mc || [],
            mcArr = mc.map((it: any) => {
              return `<p>${it}</p>`;
            });
          v = option.id;
          html = '<div  class="jt-grow1">' + mcArr.join('') + '</div>';
        }
        if (judge && optionId === v) {
          className = 'print-add ' + cla;
        }
        setOptionId(v);
        return `<div class="${className}-option" data-name="${id}" data-val="${v}"><span class="print-square"><span class="print-right">✓</span></span>${html}</div>`;
      }
      return '';
    })
    .join('');
}

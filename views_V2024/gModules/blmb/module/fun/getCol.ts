import type {BlmbMxCol} from 'GMBlmb';
import {BLMB_PAGE_WRAP, buildAbsoluteUrl, BLMB_TYPE, BLMB_TYPE_CLASS, getOption, getTextXh, wrapPage, getRow, uuid} from 'GMBlmb';
import {pageId, pageVal} from '../var';

export function getCol({bt, id, mbid, lx, nr, sffy, ys}: BlmbMxCol): string | string[] {
  id = id || uuid();
  if (mbid !== pageId) return '';
  switch (lx) {
    case '1':
      return `<p class="print print-paragraph print-paragraph-${ys}"><span>${nr}</span></p>`;
    case '2':
      return `<p class="print print-title print-title-${ys}"><span>${nr}</span></p>`;
    case '4':
      return [BLMB_PAGE_WRAP];
    case '5':
      return `<div class="print print-img print-img-${ys}" imgSize="${nr.length}">
      ${nr
        .map((it: any) => {
          return `<div><img src="${buildAbsoluteUrl(`public/img/jkcfjy/${it.url}`, 'origin')}"><span>${it.text || ''}</span></div>`;
        })
        .join('')}
      </div>`;
    case '11':
      // 多选
      pageVal[id] = [];
      let c = `print ${BLMB_TYPE_CLASS[0]} ${BLMB_TYPE_CLASS[0]}-${ys}`;
      if (sffy && sffy > '0') {
        return wrapPage(BLMB_TYPE[0], sffy, {nr, id, bt}, c, getOption);
      } else {
        let title = '';
        if (bt) {
          title = `<p data-type="${BLMB_TYPE[0]}" data-name="${id}" class="${c}-title"><span class="print-circle">●</span><span>${bt}</span></p>`;
        }
        return `${title}${getOption({nr: nr || [], cla: c, id})}`;
      }
    case '12':
      // 单选
      pageVal[id] = '';
      let select = `print ${BLMB_TYPE_CLASS[3]} ${BLMB_TYPE_CLASS[3]}`;
      return `<div data-type="${BLMB_TYPE[3]}" data-name="${id}" class="${select}-${ys}">${bt}<div class="options">${getOption({nr: nr || [], cla: `${select}-${ys}`, id})}</div></div>`;
    case '13':
      // 多行文本
      pageVal[id] = '';
      let cla = `print ${BLMB_TYPE_CLASS[1]} ${BLMB_TYPE_CLASS[1]}`;
      return `<div class="${cla}-${ys}">
      <p class="${cla}-title"><span>${bt}<span></p>
      <div class="${cla}-box" size="${nr}">
        <div class="${cla}-xhx">
          ${getTextXh(nr)}
        </div>
        <textarea class="${cla}-${ys}" title="${bt}" data-type="${BLMB_TYPE[1]}" data-name="${id}" rows="${nr}"></textarea>
      </div></div>`;
    case '14':
      pageVal[id] = {};
      let row = `print ${BLMB_TYPE_CLASS[4]} ${BLMB_TYPE_CLASS[4]}`;
      return `<div class="${row}-${ys}" data-type="${BLMB_TYPE[4]}" data-name="${id}">${getRow(bt, nr, pageVal[id])}</div>`;
    case '15':
      return `<style>${nr}</style>`;
    case '16':
      return `<div style="${nr}">`;
    case '17':
      return `</div>`;
    case 'bt':
      return nr
        .map((it: any) => {
          return getCol({lx: '2', ys: it.ys, nr: it.nr, mbid} as any);
        })
        .join('');
    case 'dx':
      let html = nr.map((it: any) => {
        return `<p>${it.nr}</p>`;
      });
      return '<div class="print-sydx"><span class="print-star">★</span><span>使用对象：</span>' + html.join('') + '</div>';
    case 'ff':
      let arr = nr.map((it: any) => {
        return `<p>${it.nr}</p>`;
      });
      return '<div class="print-syff"><span class="print-star">★</span><span>使用方法：</span>' + arr.join('') + '</div>';
    default:
      return `未设置该类型【${lx}】的数据结构样式`;
  }
}

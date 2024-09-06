import type {BlmbMxCol} from 'GMBlmb';
import {BLMB_PAGE_WRAP, buildAbsoluteUrl, BLMB_TYPE, BLMB_TYPE_CLASS} from 'GMBlmb';
import {pageId} from '../var';
import {getOption} from './getOption';
import {wrapPage} from './wrapPage';
import {getTextXh} from './getTextXh';

export function getCol({bt, id, mbid, lx, nr, sffy, ys}: BlmbMxCol): string | string[] {
  if (mbid !== pageId) return '';
  switch (lx) {
    case '1':
      return `<p class="print-paragraph-${ys}"><span>${nr}</span></p>`;
    case '2':
      return `<p class="print-title-${ys}"><span>${nr}</span></p>`;
    case '4':
      return [BLMB_PAGE_WRAP];
    case '5':
      return `<div class="print-img print-img-${ys}" imgSize="${nr.length}">
      ${nr
        .map((it: any) => {
          return `<div><img src="${buildAbsoluteUrl(`public/img/jkcfjy/${it.url}`, 'origin')}"><span>${it.text || ''}</span></div>`;
        })
        .join('')}
      </div>`;
    case '11':
      let c = `${BLMB_TYPE_CLASS[0]} ${BLMB_TYPE_CLASS[0]}-${ys}`;
      if (sffy && sffy > '0') {
        return wrapPage(BLMB_TYPE[0], sffy, {nr, id, bt}, c, getOption);
      } else {
        return `<p data-type="${BLMB_TYPE[0]}" data-name="${id}" class="${c}-title"><span class="print-circle">●</span><span>${bt}</span></p>${getOption({nr: nr || [], cla: c, id})}`;
      }
    case '12':
      return '';
    case '13':
      let cla = `${BLMB_TYPE_CLASS[1]}-${ys}`;
      return `
      <p class="${cla}-title"><span>${bt}<span></p>
      <div class="${BLMB_TYPE_CLASS[1]}-box ${cla}" size="${nr}">
        <div class="${BLMB_TYPE_CLASS[1]}-xhx">
          ${getTextXh(nr)}
        </div>
        <textarea class="${BLMB_TYPE_CLASS[1]}" title="${bt}" data-name="${id}" data-type="${BLMB_TYPE[1]}" rows="${nr}"></textarea>
      </div>`;
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

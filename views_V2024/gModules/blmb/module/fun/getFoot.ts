import type {BlmbMxCol} from 'GMBlmb';
import {pageFootStyle, pageId} from '../var';
import {getCol} from './getCol';

export function getFoot(cols: BlmbMxCol[]): string {
  const obj: any = {};
  switch (pageFootStyle) {
    case '0':
      cols.forEach(it => {
        let id = it.bt as string,
          d = obj[id] || [];
        obj[id] = d;
        d.push(it);
      });
      const keys = Object.keys(obj);
      return `<div class="print-foot-0 jt-grow1 print-foot">
        <div class="jt-flex print-abs">
          <div class="jt-grow1">
            <div class="jt-flex-r print-abs" alignstart>
              <p class="jt-grow1"><span>医生 / 指导人员签名：</span><span data-name="jzysxm"></span></p>
              <p><span>咨询电话：</span>
                <span class="print-tel" data-name="zxdh"></span>
              </p>
              <p>
                <span>日期：</span><input class="print-year" data-name="year"/><span>年</span>
                <input class="print-month" data-name="month"><span>月</span>
                <input class="print-day" data-name="day"><span>日</span>
              </p>
              </div>
            </div>
          <div class="print-tip">
            ${keys
              .map(lx => {
                return getCol({lx, nr: obj[lx], mbid: pageId} as any);
              })
              .join('')}
          </div>
        </div>
      </div>`;
    default:
      return `未设置该类型【${pageFootStyle}】尾部样式`;
  }
}

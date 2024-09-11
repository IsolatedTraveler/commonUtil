import {BLMB_PAGE_WIDTH} from 'GMBlmb';

export let titleHtml = '',
  footHtml = '',
  pageHtml = '',
  pageSize = 'A4',
  fontNum = 39,
  pageBj = '0',
  pageCols: any[],
  pageId = '',
  pageHeadStyle = '',
  pageFootStyle = '',
  pageVal: any = {},
  pageElem = document.createElement('div'),
  jqueryPageElem = $(pageElem),
  judge: boolean = false;
export function setTitleHtml(v: string) {
  judge = judge || titleHtml != v;
  titleHtml = v;
}
export function setFootHtml(v: string) {
  judge = judge || footHtml != v;
  footHtml = v;
}
export function setPageVal(v: any) {
  pageVal = Object.assign({}, pageVal, v);
}
export function setPageHtml(size: string, ztsl: string, ztys: string, cols: any[], mbjcxxys: string, mbjwxxys: string, id: string) {
  let back: string = pageHtml;
  judge = false;
  judge = judge || pageSize != size || fontNum != (ztsl as any as number) || pageBj != ztys || pageHeadStyle != mbjcxxys || pageFootStyle != mbjwxxys;
  pageSize = size || pageSize;
  fontNum = (ztsl || fontNum) as number;
  pageBj = ztys || pageBj;
  pageCols = cols || pageCols;
  pageId = pageId || id;
  pageHeadStyle = mbjcxxys || pageHeadStyle;
  pageFootStyle = mbjwxxys || pageFootStyle;
  pageHtml = `<page size="${pageSize}" class="pd-${pageBj} jt-flex" style="font-size:${BLMB_PAGE_WIDTH[pageSize] / fontNum}cm" jt-page-id="${id}">`;
  judge = judge || pageHtml != back;
}

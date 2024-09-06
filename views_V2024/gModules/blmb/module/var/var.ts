export let titleHtml = '',
  footHtml = '',
  pageHtml = '',
  pageSize = 'A4',
  fontNum = '39',
  pageBj = '0',
  pageCols: any[],
  pageId = '',
  pageHeadStyle = '',
  pageFootStyle = '',
  optionId = '',
  pageVal: any = {},
  pageElem = document.createElement('div');
export function setTitleHtml(v: string) {
  titleHtml = v;
}
export function setFootHtml(v: string) {
  footHtml = v;
}
export function setOptionId(v: string) {
  optionId = v;
}
export function setPageVal(v: any) {
  pageVal = Object.assign({}, pageVal, v);
}
export function setPageHtml(id: string, size: string, ztsl: string, ztys: string, cols: any[], mbjcxxys: string, mbjwxxys: string) {
  pageSize = size || pageSize;
  fontNum = ztsl || fontNum;
  pageBj = ztys || pageBj;
  pageCols = cols || pageCols;
  pageId = id || pageId;
  pageHeadStyle = mbjcxxys || pageHeadStyle;
  pageFootStyle = mbjwxxys || pageFootStyle;
  pageHtml = `<page size="${pageSize}" class="pd-${pageBj} jt-flex" font-num="${fontNum}" jt-page-id="${id}">`;
}

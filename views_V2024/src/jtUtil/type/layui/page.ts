export interface LayuiPage {
  layout: ['limit', 'count', 'prev', 'page', 'next', 'skip'],
  groups: number,
  count: number,
  limit: number,
  limits:number[],
  curr: number,
  jump:(res:LayuiPage, first: true)=> void 
}
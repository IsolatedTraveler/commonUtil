export function getXzqh(jsm: string, page: number | string = 1, size: number | string = 20) {
  const data = GLOBAL$AJAX$.commonHttppost('/magic/yy10-ywjc/01/10/s-xzqh', { jsm, page, size }).data
  data.rows = data.list
  return data
}
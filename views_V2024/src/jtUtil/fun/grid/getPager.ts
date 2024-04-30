export interface GrigPage {
  pageNumber: number
  pageSize: number
  blanksearch?: string
  dm?: string
}
export type DataGridLy = 'grid' | 'comboGrid' | 'xzqh'
export function getPager(gridObject: any, pageNumber: number, ly: DataGridLy): { gridObj: any, grid: any } {
  const gridObj = $(gridObject), grid = ly === 'comboGrid' ? gridObj.combogrid("grid") : gridObj
    , pager = grid.datagrid('getPager')
  if (pageNumber && pageNumber !== pager.pageNumber) {
    pager.pagination({ pageNumber });
  }
  return {
    gridObj,
    grid
  }
}
import { DataGridLy } from "../../type/grid";

export function getPager(gridObject: any, pageNumber: number, ly: DataGridLy): { gridObj: any, grid: any } {
  const gridObj: any = $(gridObject), grid = ly === 'comboGrid' ? gridObj.combogrid("grid") : gridObj
    , pager = grid.datagrid('getPager')
  if (pageNumber && pageNumber !== pager.pageNumber) {
    pager.pagination({ pageNumber });
  }
  return {
    gridObj,
    grid
  }
}
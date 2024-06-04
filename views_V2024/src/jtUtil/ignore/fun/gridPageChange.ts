import { alertMsg } from "../../../../g-lobal";
import { DataGridLy, GrigPage } from "../../type/grid";
import { loadDataGrigPageData } from "../public/loadDataGrigPageData";

export function gridPageChange(gridObject: any, param: GrigPage, url: string, pager: any, ly: DataGridLy = 'grid', q?: string) {
  try {
    const reloadData = (pageNumber: number, pageSize: number) => {
      try {
        if (ly === 'comboGrid') {
          if (q || param.blanksearch) {
            param.dm = q
          } else {
            return
          }
        }
        param.pageNumber = pageNumber;
        param.pageSize = pageSize;
        loadDataGrigPageData(gridObject, url, param, ly);
      } catch (e) {
        alertMsg(e);
      }
    }
    pager.pagination({
      displayMsg: '',
      onRefresh: reloadData,
      onChangePageSize: (pageSize: number) => reloadData(1, pageSize),
      onSelectPage: reloadData
    });
  } catch (e: any) {
    alertMsg(e)
  }
}
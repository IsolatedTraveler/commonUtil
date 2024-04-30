import { loadDataGrigPageData } from "../../checkArea/loadDataGrigPageData";
import { DataGridLy, GrigPage } from "./getPager";

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
        GLOBAL$COMMON$V2024$.alertMsg(e);
      }
    }
    pager.pagination({
      displayMsg: '',
      onRefresh: reloadData,
      onChangePageSize: (pageSize: number) => reloadData(1, pageSize),
      onSelectPage: reloadData
    });
  } catch (e: any) {
    GLOBAL$COMMON$V2024$.alertMsg(e)
  }
}
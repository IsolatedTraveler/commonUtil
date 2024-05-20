import { JtTableParam } from "../type";
import { getTablePageSize } from "./getTablePageSize";
import { initTable } from "./initTable";

export function initQueryTable(param: JtTableParam, mx: JtTableParam, res: any, pelem: JQuery) {
  const table = initTable(param, res.page)
  if (mx) {
    const mxPage = {
      size: getTablePageSize(mx.page),
      page: 1
    }
    initTable(mx)
    window.layui.table.on(`row(${param.filter})`, (rowData: any) => {
      res.row = rowData
      // 执行自带的点击事件
      // 加载子table的数据
      if (mx.getData) {
        mxPage.page = 1
        mx.getData(mxPage)
      }
      // 设置父子table的高度
      $(mx.elem).parent().show()
      table.reload({ height: pelem.height() })
    })
  }
  return table
}
import { JtPage, JtTableData, JtTableParam } from "../type";
import { getTablePageSize } from "./getTablePageSize";
import { getTr } from "./getTr";
import { initTable } from "./initTable";
import { tableReload } from "./tableReload";

export function initQueryTable(param: JtTableParam, mx: JtTableParam, res: any, pelem: JQuery) {
  const table = initTable(param, res.page), mxPage: JtPage = { page: 1 }
  if (mx) {
    mxPage.size = getTablePageSize(mx.page)
    res.mxPage = mxPage
    const mxTable = initTable(mx, mxPage)
    res.mxTableReload = ({ list = [], total = 0 }: JtTableData) => {
      mxTable.reload(tableReload(list, total, mx.page))
    }
  }
  window.layui.table.on(`row(${param.filter})`, (rowData: any) => {
    const height = pelem.height()
    setTimeout(() => {
      if (height !== pelem.height()) {
        table.reload({ height: pelem.height() })
        getTr(pelem, rowData.index).trigger('click')
      } else {
        res.row = rowData
        // 执行默认点击事件
        pelem.find('.jt-selected').removeClass('jt-selected')
        rowData.tr.addClass('jt-selected')
        // 执行自带的点击事件
        if (param.click && param.click(rowData)) {
          return
        }
        // 设置父子table的高度
        $(param.mxElem).show()
        // 加载子table的数据
        if (mx && mx.getData) {
          mxPage.page = 1
          mx.getData(mxPage)
        }
      }
    }, 0);
  })
  return table
}
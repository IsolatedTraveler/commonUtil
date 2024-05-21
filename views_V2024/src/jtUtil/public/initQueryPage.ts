import { getTablePageSize, initQueryTable, tableReload } from "../fun"
import { JtTableData, JtTableParam } from "../type"

export function initQueryPage(param: JtTableParam, mx: any) {
  // 主表
  var zTable: any
  // 主表元素
  const elem: JQuery = $(param.elem as any)
    // 主表父元素
    , pelem: JQuery = elem.parent()
    , layForm = window.layui.form
    // 翻页信息
    , page = {
      size: getTablePageSize(param.page),
      page: 1
    }
    , res = {
      row: null,
      // 重载主表
      tableReload({ list = [], total = 0 }: JtTableData) {
        zTable.reload(tableReload(list, total, page))
        this.row = null
      },
      // 重置主表高度
      setHeight(height: string) {
        zTable.reload({ height: height || pelem.height() })
      },
      // 获取form表单数据
      getFormData() {
        return layForm.val('cx')
      },
      // 获取选中数据
      getCheckedData() {
        return zTable.checkStatus(false)
      },
      // 当前主表翻页信息
      page
    }
  param.page = param.page || true
  param.filter = param.filter || 'table'
  param.mxElem = param.mxElem || '.jt-mx'
  // 通过layui.table 对主表进行初始化
  if (window.layui.table && window.layui.form) {
    zTable = initQueryTable(param, mx, res, pelem)
  } else {
    window.layui.use(['table'], function () {
      zTable = initQueryTable(param, mx, res, pelem)
    })
  }
  return res
}
import { getTablePageSize, initQueryTable, tableReload } from "../fun"
import { JtTableData, JtTableParam } from "../type"
/**
 * 初始化查询页面，包括主表格、翻页功能及相关交互。
 * 
 * @param param - 查询页面的配置参数，包含表格和翻页的相关设置。
 * @param mx - 可选参数，用于处理与主表格关联的子表格或额外的查询逻辑。
 * @returns 返回一个对象，包含对主表格的操作方法和状态信息。
 */
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
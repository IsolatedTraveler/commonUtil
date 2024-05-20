import { initQueryTable, tableReload } from "../fun"
import { LayuiTableParam } from "../type"

export function initQueryPage(param:LayuiTableParam, mx:any) {
  // 主表
  var zTable:any
  // 主表元素
  const elem:JQuery = $(param.elem as any)
  // 主表父元素
  , pelem :JQuery= elem.parent()
  , layForm = window.layui.form
  // 翻页信息
  , page = {
    size: param.page && param.page.limit || 20,
    page: '1'
  }
  , res = {
    row: null,
    // 重载主表
    tableReload(data:any[], count:number, limit:number, height:string) {
      tableReload(data, count, limit, height, zTable, page, pelem, param)
      this.row = null
    },
    // 重置主表高度
    setHeight(height:string) {
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
/**
 * @description 初始化DataGrid组件
 * @param {string} gridId DataGrid的ID
 * @param {any[][]} columnDefs 列配置数组
 * @param {string} url 数据请求的URL
 * @param {Object} queryParams 请求参数
 * @param {number} pageSize 分页大小，若<=0则默认为10
 * @param {string} title DataGrid的标题
 * @param {boolean} fitColumns 是否自动调整列宽以适应表格宽度
 * @param {boolean} nowrap 是否禁用文本换行，默认不禁用
 */
export function initDadaGrid_tab(
  gridId: string,
  columnDefs: any[][],
  url: string,
  queryParams: any,
  pageSize: number,
  title = "",
  fitColumns = false,
  nowrap = true) {
  try {
    pageSize = pageSize || 10;
    // 确定是否启用分页
    const pagination = pageSize > 0
      // 根据配置构建列模型
      , columns = columnDefs.map(colGroup =>
        colGroup.map((columnDef: any) => {
          const [field, title = '', width, align = 'cente', rowspan, colspan, sortable = false] = columnDef
            , obj: any = {
              field,
              title,
              align,
              sortable,
              rowspan,
              colspan
            }
          if (width || !fitColumns) {
            obj.width = width || 56
          }
          if (width) {
            obj.formatter = (v: string) => {
              if (v && (200 / 14 * v.length > width)) {
                return `<span title=${v}>${v}</span>`
              }
              return v
            }
          }
          return obj
        })
      )
      // 初始化DataGrid
      , gridOptions = {
        url,
        title,
        fitColumns,
        idField: 'id',
        fit: true,
        loadMsg: "加载数据中...",
        rownumbers: true,
        singleSelect: true,
        remoteSort: false,
        pagination,
        pageSize,
        queryParams,
        columns,
        nowrap,
      }
      , grid = $("#" + gridId)
    grid.datagrid(gridOptions)
    setTimeout(function () {
      $(".align_center").parent().parent().css("text-align", "center");
    }, 0)

  } catch (e) {
    GLOBAL$COMMON$V2024$.alertMsg(e)
  }
}
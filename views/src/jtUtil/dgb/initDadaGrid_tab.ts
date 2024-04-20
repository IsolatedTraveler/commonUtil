export function initDadaGrid_tab(
  gridid: string
  , columns_arr: any[][]
  , url: string
  , params: any
  , pageSize: number
  , title: string
  , fitColumns: boolean
  , nowrap: boolean) {
  try {
    fitColumns = !!fitColumns
    //判断是否分页
    var isPagination = false;
    if (pageSize > 0) {
      isPagination = true;
    } else {
      pageSize = 10;
    }
    if (nowrap != false) {
      nowrap = true;
    }
    //动态设置展示列
    var columns = [];
    for (var i = 0; i < columns_arr.length; i++) {
      //动态设置展示列
      var cols: any[][] = [];
      var col_arr = columns_arr[i];
      $(col_arr).each(function (this: any) {
        var _align = this[3];
        var _rowspan = this[4];
        var _colspan = this[5];
        if (!_align) {
          _align = 'center';
        }
        if (!_rowspan) {
          _rowspan = 1;
        }
        if (!_colspan) {
          _colspan = 1;
        }
        var column: any = { field: this[0], title: this[1], sortable: false, align: _align, rowspan: _rowspan, colspan: _colspan, halign: "center" };
        if (this[6]) {
          column.sortable = true;
        }
        if (this[2] && this[2] != '') {
          var column_width = this[2];
          column.width = column_width;
          column.formatter = function (value: any) {
            if (value && (200 / 14 * value.length > column_width)) {
              return '<span title=' + value + '>' + value + '</span>';
            }
            return value;
          }
        } else {
          if (!fitColumns) {
            column.width = 56;
          }
        }
        cols.push(column);
      });
      columns[i] = cols;
    }
    $("#" + gridid).datagrid({
      url: url,
      //iconCls: "icon-add",
      title: title,
      fitColumns: fitColumns,
      idField: 'id',
      fit: true,
      loadMsg: "加载数据中...",
      rownumbers: true,
      singleSelect: true,
      remoteSort: false,
      pagination: isPagination,
      pageSize: pageSize,
      queryParams: params,
      columns: columns,
      nowrap: nowrap
    });
    setTimeout(function () {
      $(".align_center").parent().parent().css("text-align", "center");
    }, 0)

  } catch (e) {
    GLOBAL$BROWSER$.errorTrace(e);
  }
}
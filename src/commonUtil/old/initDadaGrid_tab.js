export function initDadaGrid_tab(
  gridid,
  columns_arr,
  url,
  params,
  pageSize,
  title,
  fitColumns,
  nowrap
) {
  try {
    if (!fitColumns) {
      fitColumns = false;
    } else {
      fitColumns = true;
    }
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
      var cols = [];
      var col_arr = columns_arr[i];
      $(col_arr).each(function () {
        var _align = this[3];
        var _rowspan = this[4];
        var _colspan = this[5];
        var _hidden = this[6];
        var _sortable = this[7];
        if (!_align) {
          _align = "center";
        }
        if (!_rowspan) {
          _rowspan = 1;
        }
        if (!_colspan) {
          _colspan = 1;
        }
        if (!_hidden) {
          _hidden = false;
        }
        if (!_sortable) {
          _sortable = false;
        }
        var column = {
          field: this[0],
          title: this[1],
          sortable: _sortable,
          align: _align,
          rowspan: _rowspan,
          colspan: _colspan,
          halign: "center",
          hidden: _hidden,
        };
        if (this[2] && this[2] != "") {
          var column_width = this[2];
          column.width = column_width;
          column.formatter = function (value, row, index) {
            if (value && (200 / 14) * value.length > column_width) {
              //var famtterValue = value.substr(0, 14/200*column_width)+'...';
              return "<span title=" + value + ">" + value + "</span>";
            }
            return value;
          };
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
      idField: "id",
      fit: true,
      loadMsg: "加载数据中...",
      rownumbers: true,
      singleSelect: true,
      remoteSort: false,
      pagination: isPagination,
      pageSize: pageSize,
      queryParams: params,
      columns: columns,
      nowrap: nowrap,
    });
    setTimeout(function () {
      $(".align_center").parent().parent().css("text-align", "center");
    }, 0);

    //			var dg = $("#"+gridid);
    //			var col = dg.datagrid('getColumnOption', 'id');
    //			col.width = 300;
    //			col.align = 'center';
    //			dg.datagrid();
  } catch (e) {
    JsErrorTrace(e);
  }
}

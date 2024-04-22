export function getCommonCombogrid(params: any) {
  try {
    var id = params.id;
    var columns_arr = params.columns;
    var idField = params.idField;
    var textField = params.textField;
    var querymethod = params.querymethod;
    var selectmethod = params.selectmethod;
    var nextid = params.nextid;
    var comboclass = params.comboclass;
    var extramethod = params.extramethod;
    var flag = params.flag;
    var panelWidth = params.panelWidth;
    var nowrap = params.nowrap;
    var panelHeight = params.panelHeight;
    var pagination = params.pagination;
    var required = params.required;
    var pageSize = params.pageSize;
    var pageList = params.pageList;
    if (!pageSize) {
      pageSize = 10;
    }
    if (!pageList) {
      pageList = [10, 20, 30, 40, 50];
    }
    if (required) {
      required = true;
    } else {
      required = false;
    }
    if (!nowrap) {
      nowrap = true;
    }
    var selectedindex = 0;
    var firstsearch = true;
    var blanksearch = params.blanksearch;
    //动态设置展示列
    var columns = [];
    for (var i = 0; i < columns_arr.length; i++) {
      //动态设置展示列
      var cols: any[] = [];
      var col_arr = columns_arr[i];
      $(col_arr).each(function (this: any) {
        var _align = this[3];
        var _rowspan = this[4];
        var _colspan = this[5];
        var _width = this[6];
        if (!_align) {
          _align = 'center';
        }
        if (!_rowspan) {
          _rowspan = 1;
        }
        if (!_colspan) {
          _colspan = 1;
        }
        if (!_width) {
          _width = 100;
        }
        var column: any = { field: this[0], title: this[1], sortable: false, align: _align, rowspan: _rowspan, colspan: _colspan, halign: "center", width: _width };
        if (this[2] && this[2] != '') {
          var column_width = this[2];
          column.width = column_width;
          column.formatter = function (value: any) {
            if (value) {
              if (200 / 14 * value.length > column_width) {
                //var famtterValue = value.substr(0, 14/200*column_width)+'...';
                return '<span title=' + value + '>' + value + '</span>';
              }
            }
            return value;
          }
        }
        cols.push(column);
      });
      columns[i] = cols;
    }
    if (!panelWidth) {
      panelWidth = 300;
    }
    if (!panelHeight) {
      panelHeight = "auto";
    }
    if (pagination) {
      pagination = true;
    } else {
      pagination = false;
    }
    $("#" + id).combogrid({
      idField: idField,
      textField: textField,
      selectOnNavigation: false,
      panelHeight: panelHeight,
      panelWidth: panelWidth,
      rownumbers: true,
      fitColumns: true,
      required: required,
      pagination: pagination,
      columns: columns,
      nowrap: nowrap,
      pageSize: pageSize,
      pageList: pageList,
      onLoadSuccess: function () {

      },
      onShowPanel: function () {

      },
      onSelect: function (index: number, row: any) {
        try {
          if (nextid) {
            $('#' + nextid).textbox("textbox").focus();
          } else {
            $("#" + id).textbox("textbox").focus();
          }
          if (selectmethod) {
            selectmethod(index, row);
          }
        } catch (e) {
          GLOBAL$BROWSER$.errorTrace(e);
        }
      },
      keyHandler: {
        enter: function () {
          try {
            let gridObject = $(this);
            var value = $(this).combogrid('getText');
            var regu = "^[ ]+$";
            var re = new RegExp(regu);
            if (re.test(value) && !blanksearch) {
              return;
            }
            if ((value && !re.test(value)) || blanksearch) {
              querymethod();
              var rows = $(this).combogrid("grid").datagrid("getRows");
              firstsearch = true;
              if (rows.length == 0) {
                $.messager.show({
                  title: '',
                  msg: '查询数据为空',
                  showType: 'slide',
                  timeout: 2000,
                  style: {
                    right: '',
                    top: document.body.scrollTop + document.documentElement.scrollTop,
                    bottom: ''
                  }
                });
                if (flag == true) {
                  $(this).combogrid('setValue', value);
                  if (nextid) {
                    setTimeout(function () {
                      $('#' + nextid).textbox("textbox").focus();
                    }, 1);
                  }
                } else {
                  $(this).combogrid('setValue', "");
                  $(this).combogrid('setText', "");
                }
                $(this).combogrid("hidePanel");
                return;
              } else if (rows.length == 1) {
                if (params.one_index_show == true) {
                  $(this).combogrid("showPanel");
                } else {
                  $(this).combogrid('setValue', rows[0][idField]);
                  $(this).combogrid("hidePanel");
                  if (nextid) {
                    setTimeout(function () {
                      $('#' + nextid).textbox("textbox").focus();
                    }, 1);
                  }
                  if (selectmethod) {
                    selectmethod(0, rows[0]);
                  }
                  $(this).combogrid("hidePanel");
                  return;
                }
              } else {
                $(this).combogrid("showPanel");
              }
              $(this).combogrid('setValue', "");
              $(this).combogrid('setText', value);
              $(this).combogrid('grid').datagrid("highlightRow", 0);
              $("#" + id).textbox("textbox").blur();
              selectedindex = 0;

              document.onkeyup = function (event) {
                try {
                  if (JSON.stringify(gridObject[0]) != "{}") {
                    var pClosed = $("#" + id).combogrid("panel").panel("options").closed;
                    if (!pClosed) {
                      var e = event || window.event;
                      var keyCode = e.keyCode || e.which;
                      if (keyCode >= 48 && keyCode <= 57) {
                        var realkey = String.fromCharCode(keyCode) //将数字形式的键值转化为真实的按键
                        $("#" + id).combogrid('grid').datagrid("highlightRow", -1);
                        $("#" + id).combogrid('grid').datagrid("highlightRow", Number(realkey) - 1);
                        selectedindex = Number(realkey) - 1;
                      }
                      if (keyCode == 38) {
                        let grid = $("#" + id).combogrid("grid");
                        if (selectedindex == 0) {
                          selectedindex = grid.datagrid("getRows").length - 1;
                        } else {
                          selectedindex = Number(selectedindex) - 1;
                        }
                        grid.datagrid("highlightRow", selectedindex);
                      }
                      if (keyCode == 40) {
                        let grid = $("#" + id).combogrid("grid");
                        if (selectedindex == (grid.datagrid("getRows").length - 1)) {
                          selectedindex = 0;
                        } else {
                          selectedindex = Number(selectedindex) + 1;
                        }
                        grid.datagrid("highlightRow", selectedindex);
                      }
                      if (keyCode == 13) {
                        if (!firstsearch) {
                          var rows = $("#" + id).combogrid('grid').datagrid("getRows");
                          $("#" + id).combogrid("setValue", rows[selectedindex][idField]);
                          $("#" + id).combogrid("hidePanel");
                          firstsearch = true;
                          if (nextid) {
                            $('#' + nextid).textbox("textbox").focus();
                          } else {
                            $("#" + id).textbox("textbox").focus();
                          }
                          if (selectmethod) {
                            selectmethod(selectedindex, rows[selectedindex]);
                          }
                        } else {
                          firstsearch = false;
                        }
                      }
                      if (keyCode == 27) {
                        $("#" + id).combogrid("setText", value);
                        $("#" + id).textbox("textbox").focus();
                        $("#" + id).combogrid("hidePanel");
                        firstsearch = true;
                      }
                      if (pagination && keyCode == 37) {
                        let pagenum = $("#" + id).combogrid("grid").datagrid("getPager").pagination('options').pageNumber;
                        if (pagenum != 1) {
                          $("#" + id).combogrid("grid").datagrid("getPager").pagination("select", pagenum - 1);
                        }
                      }
                      if (pagination && keyCode == 39) {
                        let pagenum = $("#" + id).combogrid("grid").datagrid("getPager").pagination('options').pageNumber;
                        var pageSize = $("#" + id).combogrid("grid").datagrid("getPager").pagination('options').pageSize;
                        var datatotal = $("#" + id).combogrid("grid").datagrid("getPager").pagination('options').total;
                        var pageTotal = Number(datatotal / pageSize) + 1;
                        if (pagenum != pageTotal) {
                          $("#" + id).combogrid("grid").datagrid("getPager").pagination("select", pagenum + 1);
                        }
                      }
                    }
                  }
                } catch (e) {
                  GLOBAL$BROWSER$.errorTrace(e);
                }
              }
            } else {
              if (nextid && !required) {
                $('#' + nextid).textbox("textbox").focus();
              }
            }
          } catch (e) {
            GLOBAL$BROWSER$.errorTrace(e);
          }
        },
        query: function (q: any, e: any) {
          try {
            $(this).combogrid("hidePanel");
            $(this).combogrid("grid").datagrid("highlightRow", -1);
            return false;
          } catch (e) {
            GLOBAL$BROWSER$.errorTrace(e);
          }
        }
      }
    });
    //是否展示combogrid右侧图标
    if (comboclass != "" && comboclass != undefined) {
      $("#" + id).next("span").children("span").children("a").removeClass("combo-arrow").addClass(comboclass);
      $("#" + id).next("span").children("span").unbind();
      $("#" + id).next("span").children("span").children("a").unbind();
      $("#" + id).next("span").children("span").children("a").click(function () {
        extramethod();
      })
    } else {
      $("#" + id).next("span").children("span").hide();
    }
  } catch (e) {
    GLOBAL$BROWSER$.errorTrace(e);
  }
}
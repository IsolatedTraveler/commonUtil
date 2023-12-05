import { BASE64 } from "../var/init";

export function getEditorCombogrid(params) {
  try {
    var gridId = params.gridId;
    var columns_arr = params.columns;
    var idField = params.idField;
    var textField = params.textField;
    var querymethod = params.querymethod;
    var selectmethod = params.selectmethod;
    var nextobj = params.nextobj;
    var comboclass = params.comboclass;
    var extramethod = params.extramethod;
    var panelWidth = params.panelWidth;
    var panelHeight = params.panelHeight;
    var pagination = params.pagination;
    var required = params.required;
    var showOne = params.showOne;
    if (required) {
      required = true;
    } else {
      required = false;
    }

    var selectedindex = 0;
    var firstsearch = true;
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
        var _width = this[6];
        var _hidden = this[7];
        if (_hidden) {
          _hidden = true;
        } else {
          _hidden = false;
        }
        if (!_align) {
          _align = "center";
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
        var column = {
          field: this[0],
          title: this[1],
          sortable: false,
          align: _align,
          rowspan: _rowspan,
          colspan: _colspan,
          halign: "center",
          width: _width,
          hidden: _hidden,
        };
        if (this[2] && this[2] != "") {
          var column_width = this[2];
          column.width = column_width;
          column.formatter = function (value, row, index) {
            if (value) {
              if ((200 / 14) * value.length > column_width) {
                //var famtterValue = value.substr(0, 14/200*column_width)+'...';
                return "<span title=" + value + ">" + value + "</span>";
              }
            }
            return value;
          };
        }
        if (this[0] == "mzypmc") {
          column.formatter = function (value, row, index) {
            if (value) {
              var mzypmcstr = "";
              var mzypmc = value;
              var mzypgg = row.mzypgg;
              var mzypcd = row.mzypcd;
              mzypmc = undell(mzypmc);
              mzypmcstr = mzypmc;
              if (mzypgg) {
                mzypgg = undell(mzypgg);
                mzypmcstr = mzypmcstr + "(" + mzypgg + ")";
              }
              if (mzypcd) {
                mzypcd = undell(mzypcd);
                mzypmcstr = mzypmcstr + "  " + mzypcd;
              }
              return mzypmcstr;
            } else {
              return "";
            }
          };
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
    var editordata = {
      data: [],
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
      onLoadSuccess: function () {
        try {
          var obj = $("#" + gridId)
            .datagrid("getPanel")
            .find("div.datagrid-editable")
            .children("table")
            .children("tbody")
            .children("tr")
            .children("td")
            .children("input");
          //是否展示combogrid右侧图标
          if (comboclass != "" && comboclass != undefined) {
            $(obj)
              .next("span")
              .children("span")
              .children("a")
              .removeClass("combo-arrow")
              .addClass(comboclass);
            $(obj).next("span").children("span").unbind();
            $(obj).next("span").children("span").children("a").unbind();
            $(obj)
              .next("span")
              .children("span")
              .children("a")
              .click(function () {
                extramethod();
              });
          } else {
            $(obj).next("span").children("span").hide();
          }
          //校验数据有效性
          //								$(obj).next().children(":text").blur(function() {
          //									try{
          //									var pClosed = $(obj).combogrid("panel").panel("options").closed;
          //									firstsearch=true;
          //									if (pClosed) {
          //										var textvalue = $(obj).combogrid('getText');
          //										var combodata=$(obj).combogrid('grid').datagrid('getRows');
          //										var idvalue=$(obj).combobox('getValue');
          //										var rowindex="";
          //										var row="";
          //										var setValue="";
          //
          //										$.each(combodata,function(i,n){
          //											if(textvalue==n[textField]){
          //												setValue=n[idField];
          //												rowindex=i;
          //												row=n;
          //												return false;
          //											}else{
          //												if(flag){
          //													setValue=textvalue;
          //												}else{
          //														setValue="";
          //												}
          //											}
          //										})
          //										if(setValue!=idvalue || setValue==""){
          //											$(obj).combogrid("setValue",setValue);
          //											if(required && setValue==""){
          //												$(obj).textbox("textbox").focus();
          //												return;
          //											}
          //											if(selectmethod){
          //										    	selectmethod(rowindex,row);
          //										    }
          //										}
          //									}
          //								}catch(e){
          //									JsErrorTrace(e);
          //								}
          //								})
        } catch (e) {
          JsErrorTrace(e);
        }
      },
      onSelect: function (index, row) {
        try {
          $("#" + gridId)
            .datagrid("getPanel")
            .find("div.datagrid-editable")
            .children("table")
            .children("tbody")
            .children("tr")
            .children("td")
            .children("input");
          if (selectmethod) {
            selectmethod(index, row);
          }
        } catch (e) {
          JsErrorTrace(e);
        }
      },
      keyHandler: {
        enter: function () {
          try {
            var gridObject = $(this);
            var value = $(this).combogrid("getText");
            var regu = "^[ ]+$";
            var re = new RegExp(regu);
            if (re.test(value)) {
              return;
            }
            if (value && !re.test(value)) {
              querymethod(gridObject);
              var rows = $(this).combogrid("grid").datagrid("getRows");
              firstsearch = true;
              if (rows.length == 0) {
                $.messager.show({
                  title: "",
                  msg: "查询数据为空",
                  showType: "slide",
                  style: {
                    right: "",
                    top:
                      document.body.scrollTop +
                      document.documentElement.scrollTop,
                    bottom: "",
                  },
                });
                $(this).combogrid("setValue", "");
                $(this).combogrid("hidePanel");
                return;
              } else if (rows.length == 1 && showOne != true) {
                $(this).combogrid("setValue", rows[0][idField]);
                $(this).combogrid("hidePanel");
                if (selectmethod) {
                  selectmethod(0, rows[0]);
                }
                return;
              } else {
                $(this).combogrid("showPanel");
              }
              $(this).combogrid("setValue", "");
              $(this).combogrid("setText", value);
              $(this).combogrid("grid").datagrid("highlightRow", 0);
              $(this).textbox("textbox").blur();
              selectedindex = 0;
              document.onkeydown = function (event) {
                try {
                  if (event.keyCode == "38" || event.keyCode == "40") {
                    event.returnValue = false;
                  }
                } catch (e) {
                  JsErrorTrace(e);
                }
              };
              document.onkeyup = function (event) {
                try {
                  if (JSON.stringify(gridObject[0]) != "{}") {
                    var pClosed = $(gridObject)
                      .combogrid("panel")
                      .panel("options").closed;
                    if (!pClosed) {
                      var e = event || window.event;
                      var keyCode = e.keyCode || e.which;
                      if (keyCode >= 48 && keyCode <= 57) {
                        var realkey = String.fromCharCode(keyCode); //将数字形式的键值转化为真实的按键
                        $(gridObject)
                          .combogrid("grid")
                          .datagrid("highlightRow", -1);
                        $(gridObject)
                          .combogrid("grid")
                          .datagrid("highlightRow", Number(realkey) - 1);
                        selectedindex = Number(realkey) - 1;
                      }
                      if (keyCode == 38) {
                        var grid = $(gridObject).combogrid("grid");
                        if (selectedindex == 0) {
                          selectedindex =
                            grid.datagrid("getRows").length - 1;
                        } else {
                          selectedindex = Number(selectedindex) - 1;
                        }
                        grid.datagrid("highlightRow", selectedindex);
                      }
                      if (keyCode == 40) {
                        grid = $(gridObject).combogrid("grid");
                        if (
                          selectedindex ==
                          grid.datagrid("getRows").length - 1
                        ) {
                          selectedindex = 0;
                        } else {
                          selectedindex = Number(selectedindex) + 1;
                        }
                        grid.datagrid("highlightRow", selectedindex);
                      }
                      if (keyCode == 13) {
                        if (!firstsearch) {
                          var rows = $(gridObject)
                            .combogrid("grid")
                            .datagrid("getRows");
                          $(gridObject).combogrid(
                            "setValue",
                            rows[selectedindex][idField]
                          );
                          $(gridObject).combogrid("hidePanel");
                          firstsearch = true;
                          if (selectmethod) {
                            selectmethod(
                              selectedindex,
                              rows[selectedindex]
                            );
                          }
                        } else {
                          firstsearch = false;
                        }
                      }
                      if (keyCode == 27) {
                        $(gridObject).combogrid("setText", value);
                        $(gridObject).textbox("textbox").focus();
                        $(gridObject).combogrid("hidePanel");
                        firstsearch = true;
                      }
                      if (pagination && keyCode == 37) {
                        var pagenum = $(gridObject)
                          .combogrid("grid")
                          .datagrid("getPager")
                          .pagination("options").pageNumber;
                        if (pagenum != 1) {
                          $(gridObject)
                            .combogrid("grid")
                            .datagrid("getPager")
                            .pagination("select", pagenum - 1);
                        }
                      }
                      if (pagination && keyCode == 39) {
                        pagenum = $(gridObject)
                          .combogrid("grid")
                          .datagrid("getPager")
                          .pagination("options").pageNumber;
                        var pageSize = $(gridObject)
                          .combogrid("grid")
                          .datagrid("getPager")
                          .pagination("options").pageSize;
                        var datatotal = $(gridObject)
                          .combogrid("grid")
                          .datagrid("getPager")
                          .pagination("options").total;
                        var pageTotal = Number(datatotal / pageSize) + 1;
                        if (pagenum != pageTotal) {
                          $(gridObject)
                            .combogrid("grid")
                            .datagrid("getPager")
                            .pagination("select", pagenum + 1);
                        }
                      }
                    }
                  }
                } catch (e) {
                  JsErrorTrace(e);
                }
              };
            } else {
              if (nextobj && !required) {
                setTimeout(function () {
                  var dg = $("#" + gridId);
                  var cell = dg.datagrid("cell");
                  //$('#'+gridId).datagrid('editCell',  {"index" : cell.index, "field":nextobj});
                  endCellEdit(dg, true);
                  getNextEditor(dg, cell);
                }, 100);
              }
            }
          } catch (e) {
            JsErrorTrace(e);
          }
        },
        query: function (q, e) {
          try {
            $(this).combogrid("hidePanel");
            $(this).combogrid("grid").datagrid("highlightRow", -1);
            return false;
          } catch (e) {
            JsErrorTrace(e);
          }
        },
      },
    };
    return editordata;
  } catch (e) {
    JsErrorTrace(e);
  }
}
export function endCellEdit(target, accepted) {
  try {
    var dg = $(target);
    var cell = dg.datagrid("cell");
    if (cell) {
      var input = dg.datagrid("input", cell);
      if (input) {
        if (accepted) {
          if (dg.datagrid("validateRow", cell.index)) {
            dg.datagrid("endEdit", cell.index);
            dg.datagrid("gotoCell", cell);
          } else {
            dg.datagrid("gotoCell", cell);
            dg.datagrid("options").rowIndex = cell.index;
            input.focus();
            return false;
          }
        } else {
          dg.datagrid("cancelEdit", cell.index);
          dg.datagrid("gotoCell", cell);
        }
      }
    }
    return true;
  } catch (e) {
    JsErrorTrace(e);
  }
}
 export function getNextEditor(dg, cell) {
  try {
    var gridrows = dg.datagrid("getRows");
    var cell_row = gridrows[cell.index];
    var opts = dg.datagrid("options");
    var columns = new Array();
    var columnsAll = opts.columns;
    for (var i = 0; i < columnsAll.length; i++) {
      columns = columns.concat(columnsAll[i]);
    }
    var editorColumns = [];
    $.each(columns, function (i, n) {
      var readonly_field = n.field + "_readonly";
      var nofocus_field = n.field + "_nofocus";
      //该cell设置可编辑,row里隐藏字段
      if (n.editor && !cell_row[readonly_field] && !cell_row[nofocus_field]) {
        editorColumns.push(n);
      }
    });
    var cellIndex = -1;
    for (i = 0; i < editorColumns.length; i++) {
      var n = editorColumns[i];
      if (n.field == cell.field) {
        cellIndex = i;

        if (cellIndex == editorColumns.length - 1) {
          var cell_index_1 = cell.index + 1;
          for (
            var index_kbj = cell.index + 1;
            index_kbj < gridrows.length;
            index_kbj++
          ) {
            if (gridrows[index_kbj].jgsfkbj != "bkbj") {
              cell_index_1 = index_kbj;
              break;
            }
          }
          if (
            gridrows[cell_index_1] &&
            gridrows[cell_index_1].jgsfkbj != "bkbj"
          ) {
            dg.datagrid("editCell", {
              index: cell_index_1,
              field: editorColumns[0].field,
            });
          }
        }
      } else {
        if (cellIndex != -1 && i <= editorColumns.length - 1) {
          if (editorColumns[i].editor) {
            cell = {
              index: cell.index,
              field: editorColumns[i].field,
            };
            dg.datagrid("editCell", cell);
            var param = dg.datagrid("cell");
            var input = dg.datagrid("input", param);
            input.select();
            break;
          } else {
            cell_index_1 = cell.index + 1;
            for (
              index_kbj = cell.index + 1;
              index_kbj < gridrows.length;
              index_kbj++
            ) {
              if (gridrows[index_kbj].jgsfkbj != "bkbj") {
                cell_index_1 = index_kbj;
                break;
              }
            }
            if (
              gridrows[cell_index_1] &&
              gridrows[cell_index_1].jgsfkbj != "bkbj"
            ) {
              dg.datagrid("editCell", {
                index: cell_index_1,
                field: editorColumns[0].field,
              });
              param = dg.datagrid("cell");
              input = dg.datagrid("input", param);
              input.select();
            }
          }
        } else if (i == editorColumns.length - 1) {
          cell_index_1 = cell.index + 1;
          for (
            index_kbj = cell.index + 1;
            index_kbj < gridrows.length;
            index_kbj++
          ) {
            if (gridrows[index_kbj].jgsfkbj != "bkbj") {
              cell_index_1 = index_kbj;
              break;
            }
          }
          if (
            gridrows[cell_index_1] &&
            gridrows[cell_index_1].jgsfkbj != "bkbj"
          ) {
            dg.datagrid("editCell", {
              index: cell_index_1,
              field: editorColumns[0].field,
            });
            param = dg.datagrid("cell");
            input = dg.datagrid("input", param);
            if (input) {
              input.select();
            }
          }
        }
      }
    }
  } catch (e) {
    JsErrorTrace(e);
  }
}
function undell(str = "") {
  var tempStr = str.replace(/\\u0026/g, "&");
  tempStr = tempStr.replace(/\\u0025/g, "%");
  tempStr = tempStr.replace(/\\u003F/g, "?");
  tempStr = tempStr.replace(/\\u0023/g, "#");
  tempStr = tempStr.replace(/\\u003D/g, "=");
  tempStr = tempStr.replace(/\\u002B/g, "+");
  tempStr = tempStr.replace(/%20/g, " ");
  tempStr = BASE64.decoderToString(tempStr);
  return tempStr;
}
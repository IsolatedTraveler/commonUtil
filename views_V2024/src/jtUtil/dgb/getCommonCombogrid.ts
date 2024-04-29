export function getCommonCombogrid({
  id,
  columns= [], // 动态生成
  idField= 'id',
  textField= 'text',
  querymethod,
  selectmethod,
  nextid,
  comboclass,
  extramethod,
  flag,
  panelWidth=300,
  nowrap,
  panelHeight= 'auto',
  pagination,
  one_index_show,
  required,
  pageSize= 10,
  pageList= [10, 20, 30, 40, 50],
  blanksearch}={} as any) {
  try {
    required = Boolean(required)
    pagination = Boolean(pagination)
    nowrap = !nowrap
    var selectedindex = 0;
    var firstsearch = true;
    var value:string
    const domElem = $("#" + id)
    columns = columns.map((col:any[]) => col.map(item => {
      var [field, title, customWidth, align = 'center', rowspan = 1, colspan = 1, width = 100] = item;
        return{
            field,
            title,
            sortable: false,
            align,
            rowspan,
            colspan,
            halign: "center",
            width: customWidth || width,
            formatter: function(value:string) {
                if (value && 200 / 14 * value.length > (customWidth || width)) {
                    return `<span title="${value}">${value}</span>`;
                }
                return value;
            }
        }
    }))
    if (pagination) {
      pagination = true;
    } else {
      pagination = false;
    }
    domElem.combogrid({
      idField,
      textField,
      selectOnNavigation: false,
      panelHeight,
      panelWidth,
      rownumbers: true,
      fitColumns: true,
      required,
      pagination,
      columns,
      nowrap,
      pageSize,
      pageList,
      onSelect: function (index: number, row: any) {
        try {
          if (nextid) {
            $('#' + nextid).textbox("textbox").focus();
          } else {
            domElem.textbox("textbox").focus();
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
            let reguBlank = /^[ ]+$/
            value = domElem.combogrid('getText')
            if (reguBlank.test(value) && !blanksearch) {
              return;
            }
            if ((value && !reguBlank.test(value)) || blanksearch) {
              querymethod();
              var rows = domElem.combogrid("grid").datagrid("getRows");
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
                  domElem.combogrid('setValue', value);
                  if (nextid) {
                    setTimeout(function () {
                      $('#' + nextid).textbox("textbox").focus();
                    }, 1);
                  }
                } else {
                  domElem.combogrid('setValue', "");
                  domElem.combogrid('setText', "");
                }
                domElem.combogrid("hidePanel");
                return;
              } else if (rows.length == 1) {
                if (one_index_show == true) {
                  domElem.combogrid("showPanel");
                } else {
                  domElem.combogrid('setValue', rows[0][idField]);
                  domElem.combogrid("hidePanel");
                  if (nextid) {
                    setTimeout(function () {
                      $('#' + nextid).textbox("textbox").focus();
                    }, 1);
                  }
                  if (selectmethod) {
                    selectmethod(0, rows[0]);
                  }
                  domElem.combogrid("hidePanel");
                  return;
                }
              } else {
                domElem.combogrid("showPanel");
              }
              domElem.combogrid('setValue', "");
              domElem.combogrid('setText', value);
              domElem.combogrid('grid').datagrid("highlightRow", 0);
              domElem.textbox("textbox").blur();
              selectedindex = 0;
            } else {
              if (nextid && !required) {
                $('#' + nextid).textbox("textbox").focus();
              }
            }
          } catch (e) {
            GLOBAL$BROWSER$.errorTrace(e);
          }
        },
        query: function () {
          try {
            domElem.combogrid("hidePanel");
            domElem.combogrid("grid").datagrid("highlightRow", -1);
            return false;
          } catch (e) {
            GLOBAL$BROWSER$.errorTrace(e);
          }
        }
      }
    });
    document.onkeyup = function (event) {
      try {
        if (JSON.stringify(domElem[0]) != "{}") {
          var pClosed = domElem.combogrid("panel").panel("options").closed;
          if (!pClosed) {
            var e = event || window.event;
            var keyCode = e.keyCode || e.which;
            if (keyCode >= 48 && keyCode <= 57) {
              var realkey = String.fromCharCode(keyCode) //将数字形式的键值转化为真实的按键
              domElem.combogrid('grid').datagrid("highlightRow", -1);
              domElem.combogrid('grid').datagrid("highlightRow", Number(realkey) - 1);
              selectedindex = Number(realkey) - 1;
            }
            if (keyCode == 38) {
              let grid = domElem.combogrid("grid");
              if (selectedindex == 0) {
                selectedindex = grid.datagrid("getRows").length - 1;
              } else {
                selectedindex = Number(selectedindex) - 1;
              }
              grid.datagrid("highlightRow", selectedindex);
            }
            if (keyCode == 40) {
              let grid = domElem.combogrid("grid");
              if (selectedindex == (grid.datagrid("getRows").length - 1)) {
                selectedindex = 0;
              } else {
                selectedindex = Number(selectedindex) + 1;
              }
              grid.datagrid("highlightRow", selectedindex);
            }
            if (keyCode == 13) {
              if (!firstsearch) {
                var rows = domElem.combogrid('grid').datagrid("getRows");
                domElem.combogrid("setValue", rows[selectedindex][idField]);
                domElem.combogrid("hidePanel");
                firstsearch = true;
                if (nextid) {
                  $('#' + nextid).textbox("textbox").focus();
                } else {
                  domElem.textbox("textbox").focus();
                }
                if (selectmethod) {
                  selectmethod(selectedindex, rows[selectedindex]);
                }
              } else {
                firstsearch = false;
              }
            }
            if (keyCode == 27) {
              domElem.combogrid("setText", value);
              domElem.textbox("textbox").focus();
              domElem.combogrid("hidePanel");
              firstsearch = true;
            }
            if (pagination && keyCode == 37) {
              let pagenum = domElem.combogrid("grid").datagrid("getPager").pagination('options').pageNumber;
              if (pagenum != 1) {
                domElem.combogrid("grid").datagrid("getPager").pagination("select", pagenum - 1);
              }
            }
            if (pagination && keyCode == 39) {
              let pagenum = domElem.combogrid("grid").datagrid("getPager").pagination('options').pageNumber;
              var pageSize = domElem.combogrid("grid").datagrid("getPager").pagination('options').pageSize;
              var datatotal = domElem.combogrid("grid").datagrid("getPager").pagination('options').total;
              var pageTotal = Number(datatotal / pageSize) + 1;
              if (pagenum != pageTotal) {
                domElem.combogrid("grid").datagrid("getPager").pagination("select", pagenum + 1);
              }
            }
          }
        }
      } catch (e) {
        GLOBAL$BROWSER$.errorTrace(e);
      }
    }
    //是否展示combogrid右侧图标
    if (comboclass != "" && comboclass != undefined) {
      domElem.next("span").children("span").children("a").removeClass("combo-arrow").addClass(comboclass);
      domElem.next("span").children("span").unbind();
      domElem.next("span").children("span").children("a").unbind();
      domElem.next("span").children("span").children("a").click(function () {
        extramethod();
      })
    } else {
      domElem.next("span").children("span").hide();
    }
  } catch (e) {
    GLOBAL$LAYER$V2024$.alertMsg(e)
  }
}
import { alertMsg } from "../../../../g-lobal";
import { gridColumnsFormat } from "../../fun";
// 改成数据检索异步
export function getCommonCombogrid(config: any) {
  try {
    var {
      id,
      idField = 'id',
      textField = 'text',
      querymethod,
      selectmethod,
      nextid,
      comboclass,
      extramethod,
      flag,
      panelWidth = 300,
      nowrap,
      panelHeight = 'auto',
      one_index_show,
      pageSize = 10,
      pageList = [10, 20, 30, 40, 50],
      blanksearch } = config
    nowrap = !nowrap
    var selectedindex = 0;
    var firstsearch = true;
    var value: string
    const domElem: any = $("#" + id)
      , columns = gridColumnsFormat(config.columns, 100, { halign: 'center' })
      , required = Boolean(config.required)
      , pagination = Boolean(config.pagination)
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
            ($('#' + nextid) as any).textbox("textbox").focus();
          } else {
            domElem.textbox("textbox").focus();
          }
          if (selectmethod) {
            selectmethod(index, row);
          }
        } catch (e) {
          alertMsg(e)
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
              querymethod().then(() => {
                var rows = domElem.combogrid("grid").datagrid("getRows");
                firstsearch = false;
                if (rows.length == 0) {
                  ($ as any).messager.show({
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
                        ($('#' + nextid) as any).textbox("textbox").focus();
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
                        ($('#' + nextid) as any).textbox("textbox").focus();
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
              })
            } else {
              if (nextid && !required) {
                ($('#' + nextid) as any).textbox("textbox").focus();
              }
            }
            selectedindex = 0
            document.onkeyup = function (event) {
              try {
                if (JSON.stringify(domElem[0]) != "{}") {
                  var pClosed = domElem.combogrid("panel").panel("options").closed;
                  if (!pClosed) {
                    var keyCode = event.code
                    if (keyCode >= 'Digit0' && keyCode <= 'Digit9') {
                      const realkey = Number(keyCode.slice(5)) //将数字形式的键值转化为真实的按键
                      domElem.combogrid('grid').datagrid("highlightRow", -1);
                      domElem.combogrid('grid').datagrid("highlightRow", realkey - 1);
                      selectedindex = realkey - 1;
                    } else if (keyCode == 'ArrowUp') {
                      let grid = domElem.combogrid("grid");
                      if (selectedindex == 0) {
                        selectedindex = grid.datagrid("getRows").length - 1;
                      } else {
                        selectedindex = Number(selectedindex) - 1;
                      }
                      grid.datagrid("highlightRow", selectedindex);
                    } else if (keyCode == 'ArrowDown') {
                      let grid = domElem.combogrid("grid");
                      if (selectedindex == (grid.datagrid("getRows").length - 1)) {
                        selectedindex = 0;
                      } else {
                        selectedindex = Number(selectedindex) + 1;
                      }
                      grid.datagrid("highlightRow", selectedindex);
                    } else if (keyCode == 'Enter') {
                      if (!firstsearch) {
                        var rows = domElem.combogrid('grid').datagrid("getRows");
                        domElem.combogrid("setValue", rows[selectedindex][idField]);
                        domElem.combogrid("hidePanel");
                        firstsearch = true;
                        if (nextid) {
                          ($('#' + nextid) as any).textbox("textbox").focus();
                        } else {
                          domElem.textbox("textbox").focus();
                        }
                        if (selectmethod) {
                          selectmethod(selectedindex, rows[selectedindex]);
                        }
                      } else {
                        firstsearch = false;
                      }
                    } else if (keyCode == 'Escape') {
                      domElem.combogrid("setText", value);
                      domElem.textbox("textbox").focus();
                      domElem.combogrid("hidePanel");
                      firstsearch = true;
                    } else if (pagination) {
                      if (keyCode === 'ArrowLeft') {
                        let pagenum = domElem.combogrid("grid").datagrid("getPager").pagination('options').pageNumber;
                        if (pagenum != 1) {
                          domElem.combogrid("grid").datagrid("getPager").pagination("select", pagenum - 1);
                        }
                      } else if (keyCode == 'ArrowRight') {
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
                }
              } catch (e) {
                alertMsg(e)
              }
            }
          } catch (e) {
            alertMsg(e)
          }
        },
        query: function () {
          try {
            domElem.combogrid("hidePanel");
            domElem.combogrid("grid").datagrid("highlightRow", -1);
            return false;
          } catch (e) {
            alertMsg(e)
          }
        }
      }
    });
    /*
    根据您的要求，这里列出给定数字与标准计算机键盘上对应按键的整理：

      - `13`: **回车键(Enter)**
      - `27`: **Escape键(Esc)**
      - `37`: **左箭头键(Left Arrow)**
      - `38`: **上箭头键(Up Arrow)**
      - `39`: **右箭头键(Right Arrow)**
      - `40`: **下箭头键(Down Arrow)**
      - `48-57`: 这个范围对应的是数字键 `0` 到 `9`。

      这样，您就可以直观地看到这些数字编码所代表的键盘按键了。
    */
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
    alertMsg(e)
  }
}

export function getCommonDic(dics) {
  try {
    //页面元素id
    var domId = dics.domid;
    //默认值
    var mrz = dics.mrz;
    //默认选择第一项
    var mrz_index = dics.mrz_index;
    //字典类别
    var dicKey = dics.dicKey;
    //是否能手动录入 1 支持 -1不支持
    var flag = dics.flag == "1";
    //获取焦点ID
    var nextid = dics.nextid;
    var changemethod = dics.changemethod;
    //必填项
    var required = dics.required;
    var valueField = dics.valueField;
    var textField = dics.textField;
    var multiple = dics.multiple;
    if (multiple) {
      multiple = true;
    } else {
      multiple = false;
    }
    if (!valueField) {
      valueField = "dm";
    }
    if (!textField) {
      textField = "dmmc";
    }
    if (required) {
      required = true;
    } else {
      required = false;
    }
    //是否添加一个空选项
    var addnull = dics.addnull;
    var data = that.dicget(dicKey);
    data = that.convertKeysToLowerCase(data);
    data = that.filterDicData(data);
    if (data.length > 0) {
      //添加一个空选项
      if (addnull == "1") {
        var row = { dm: "", mc: "所有", pym: "", dmmc: "所有" };
        data.unshift(row);
      }
    }
    //下拉框高度
    var panelHeight = dics.panelHeight;
    if (!panelHeight) {
      if (data.length > 10) {
        panelHeight = 200;
      } else {
        panelHeight = "";
      }
    }
    var isselect = true;
    $("#" + domId).combobox({
      data: data, //json格式的数据
      valueField: valueField,
      textField: textField,
      selectOnNavigation: false,
      required: required,
      panelHeight: panelHeight,
      multiple: multiple,
      onLoadSuccess: function () {
        try {
          var data = $("#" + domId).combobox("getData");
          if (data.length > 0) {
            if (mrz && mrz != "") {
              $("#" + domId).combobox("select", mrz);
            } else if (mrz_index) {
              $("#" + domId).combobox("select", data[0][valueField]);
            }
          }
        } catch (e) {
          JsErrorTrace(e);
        }
      },
      filter: function (q, row) {
        try {
          var keys = new Array();
          keys[keys.length] = "dm";
          keys[keys.length] = "mc";
          keys[keys.length] = "dmmc";
          keys[keys.length] = "pym";
          return that.filterComboboxData(q, row, keys);
        } catch (e) {
          JsErrorTrace(e);
        }
      },
      onSelect: function (record) {
        try {
          if (isselect) {
            if (nextid) {
              $("#" + nextid)
                .textbox("textbox")
                .focus();
            }
            if (dics.method) {
              dics.method(record);
            }
          }
        } catch (e) {
          JsErrorTrace(e);
        }
      },
      onChange: function (newValue, oldValue) {
        try {
          var panel = $(this).combo("panel");
          var item = panel.children("div:visible").eq(0);
          item.addClass("combobox-item-hover");
          if (changemethod) {
            changemethod(newValue, oldValue);
          }
        } catch (e) {
          JsErrorTrace(e);
        }
      },
      onHidePanel: function () {
        try {
          var panel = $(this).combo("panel");
          $(panel.children("div")).removeClass("combobox-item-hover");
        } catch (e) {
          JsErrorTrace(e);
        }
      },
    });
    if (data.length > 0) {
      var datalength = data.length;
      var index = -1;
      $("#" + domId)
        .textbox("textbox")
        .keyup(function (event) {
          try {
            var e = event || window.event;
            var keyCode = e.keyCode || e.which;
            if (keyCode == "38") {
              var pClosed = $("#" + domId)
                .combobox("panel")
                .panel("options").closed;
              if (pClosed) {
                isselect = false;
                if (index == 0 || index == -1) {
                  $("#" + domId).combobox(
                    "setValue",
                    data[Number(datalength) - 1][valueField]
                  );
                  index = Number(datalength) - 1;
                } else {
                  index = Number(index) - 1;
                  $("#" + domId).combobox("setValue", data[index][valueField]);
                }
                isselect = true;
              }
            }
            if (keyCode == "40") {
              let pClosed = $("#" + domId)
                .combobox("panel")
                .panel("options").closed;
              if (pClosed) {
                isselect = false;
                if (index == -1 || index == Number(datalength) - 1) {
                  $("#" + domId).combobox("setValue", data[0][valueField]);
                  index = 0;
                } else {
                  index = Number(index) + 1;
                  $("#" + domId).combobox("setValue", data[index][valueField]);
                }
                isselect = true;
              }
            }
            if (keyCode == "13") {
              if (nextid) {
                $("#" + nextid)
                  .textbox("textbox")
                  .focus();
              }
              if (dics.method) {
                dics.method(data[index]);
              }
            }
          } catch (e) {
            JsErrorTrace(e);
          }
        });
    }

    //校验数据有效性
    $("#" + domId)
      .next()
      .children(":text")
      .blur(function () {
        try {
          var pClosed = $("#" + domId)
            .combobox("panel")
            .panel("options").closed;
          if (pClosed) {
            var textvalue = $("#" + domId).combobox("getText");
            var combodata = $("#" + domId).combobox("getData");
            var idvalue = $("#" + domId).combobox("getValue");
            var setValue = "";

            $.each(combodata, function (i, n) {
              if (textvalue == n[textField]) {
                setValue = n[valueField];
                return false;
              } else {
                if (flag) {
                  setValue = textvalue;
                } else {
                  setValue = "";
                }
              }
            });
            if (setValue != idvalue || setValue == "") {
              $("#" + domId).combobox("setValue", setValue);
              if (flag == true) {
                $("#" + domId).combobox("setText", textvalue);
              }
              if (required && $("#" + domId).combobox("getText") == "") {
                //$("#"+domId).textbox("textbox").focus();
                //return;
              }
            }
          }
        } catch (e) {
          JsErrorTrace(e);
        }
      });
  } catch (e) {
    JsErrorTrace(e);
  }
}

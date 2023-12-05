
export function getCommonCombobox(params) {
  try {
    var domId = params.domId;
    var data = params.data;
    var valueField = params.valuefield;
    var textField = params.textfield;
    var mrz = params.mrz;
    var nextid = params.nextid;
    var method = params.method;
    var changemethod = params.changemethod;
    var flag = params.flag;
    var required = params.required;
    var filter_arr = params.filter_arr;
    var mrz_index = params.mrz_index;
    var multiple = params.multiple;
    var panelHeight = 200;
    if (params.panelHeight) {
      panelHeight = params.panelHeight;
    }
    var readonly_value = false;
    if (params.readonly) {
      readonly_value = params.readonly;
    }
    if (!valueField || valueField == "") {
      valueField = "code";
    }
    if (!textField || textField == "") {
      textField = "name";
    }
    if (required) {
      required = true;
    } else {
      required = false;
    }
    if (multiple) {
      multiple = true;
    } else {
      multiple = false;
    }
    var isselect = true;
    $("#" + domId).combobox({
      data: data, //json格式的数据
      valueField: valueField,
      textField: textField,
      required: required,
      selectOnNavigation: false,
      readonly: readonly_value,
      multiple: multiple,
      panelHeight: panelHeight,
      onLoadSuccess: function () {
        try {
          if (data.length > 0) {
            if (mrz && mrz != "") {
              if (multiple) {
                $("#" + domId).combobox("clear");
                $("#" + domId).combobox("setValues", mrz);
              } else {
                $("#" + domId).combobox("setValue", mrz);
              }
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
          if (filter_arr) {
            keys = filter_arr;
          } else {
            if (row.pym) {
              keys[keys.length] = "pym";
            }
            keys[keys.length] = valueField;
            keys[keys.length] = textField;
          }
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
            if (method && record) {
              method(record);
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
              let pClosed = $("#" + domId)
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
              if (method && data[index]) {
                method(data[index]);
              }
            }
          } catch (e) {
            JsErrorTrace(e);
          }
        });
    }
    //校验数据有效性
    $("#" + domId).next().children(":text").blur(function () {
      try {
        var pClosed = $("#" + domId).combobox("panel").panel("options").closed;
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

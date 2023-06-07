
export function getEditorCombobox(params) {
  try {
    var data = params.data;
    var mrz = params.mrz;
    var nextobj = params.nextobj;
    var method = params.method;
    var method_onChange = params.method_onChange;
    var flag = params.flag;
    var filter_arr = params.filter_arr;
    var valueField = params.valueField;
    var textField = params.textField;
    var required = params.required;
    var readonly = params.readonly;
    var isselect = true;
    var multiple = params.multiple;
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
    if (!readonly) {
      readonly = false;
    }
    if (!multiple) {
      multiple = false;
    }
    var editordata = {
      data: data, //json格式的数据
      valueField: valueField,
      textField: textField,
      selectOnNavigation: false,
      required: required,
      readonly: readonly,
      multiple: multiple,
      onLoadSuccess: function () {
        try {
          $(this).combobox("clear");
          var data = $(this).combobox("getData");
          var obj = this;
          if (data.length > 0) {
            if (mrz != "") {
              $(this).combobox("select", mrz);
            }
          }
          $(this)
            .next()
            .children(":text")
            .blur(function () {
              try {
                var pClosed = $(obj)
                  .combobox("panel")
                  .panel("options").closed;
                if (pClosed) {
                  var textvalue = $(obj).combobox("getText");
                  var combodata = $(obj).combobox("getData");
                  var idvalue = $(obj).combobox("getValue");
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
                    $(obj).combobox("setValue", setValue);
                    if (required && setValue == "") {
                      $(obj).textbox("textbox").focus();
                      return;
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
      },
      filter: function (q, row) {
        try {
          var keys = new Array();
          if (filter_arr) {
            keys = filter_arr;
          } else {
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
            if (nextobj) {
              $(nextobj).textbox("textbox").focus();
            }
            if (method && record) {
              method(record, $(this));
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
          if (method_onChange) {
            method_onChange(newValue, oldValue, $(this));
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
    };
    return editordata;
  } catch (e) {
    JsErrorTrace(e);
  }
}
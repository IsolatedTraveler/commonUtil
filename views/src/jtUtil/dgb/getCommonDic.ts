import { dicget } from "../public";
import { filterComboboxData } from "../public/filterComboboxData";
import { filterDicData } from "../public/filterDicData";

export function getCommonDic(dics: any) {
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
    var flag = dics.flag == '1';
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
      valueField = 'dm';
    }
    if (!textField) {
      textField = 'dmmc';
    }
    if (required) {
      required = true;
    } else {
      required = false;
    }
    //是否添加一个空选项
    var addnull = dics.addnull;
    dicget(dicKey).then((data: any[]) => {
      data = filterDicData(data);
      if (data.length > 0) {//添加一个空选项
        if (addnull == "1") {
          var row = { "dm": "", "mc": "所有", "pym": "", "dmmc": "所有" };
          data.unshift(row)
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
        data: data,//json格式的数据
        valueField: valueField,
        textField: textField,
        selectOnNavigation: false,
        required: required,
        panelHeight: panelHeight,
        multiple: multiple,
        onLoadSuccess: function () {
          try {
            var data = $("#" + domId).combobox('getData');
            if (data.length > 0) {
              if (mrz && mrz != '') {
                $("#" + domId).combobox('select', mrz);
              } else if (mrz_index) {
                $("#" + domId).combobox('select', data[0][valueField]);
              }
            }
          } catch (e) {
            GLOBAL$BROWSER$.errorTrace(e);
          }
        },
        filter: function (q: any, row: any) {
          var keys = ['dm', 'mc', 'dmmc', 'pym'];
          return filterComboboxData(q, row, keys);
        },
        onSelect: function (record: any) {
          try {
            if (isselect) {
              if (nextid) {
                $('#' + nextid).textbox("textbox").focus();
              }
              if (dics.method) {
                dics.method(record);
              }
            }
          } catch (e) {
            GLOBAL$BROWSER$.errorTrace(e);
          }
        },
        onChange: function (newValue: any, oldValue: any) {
          try {
            var panel = $(this).combo("panel");
            var item = panel.children("div:visible").eq(0);
            item.addClass("combobox-item-hover");
            if (changemethod) {
              changemethod(newValue, oldValue);
            }
          } catch (e) {
            GLOBAL$BROWSER$.errorTrace(e);
          }
        },
        onHidePanel: function () {
          try {
            var panel = $(this).combo("panel");
            $(panel.children("div")).removeClass("combobox-item-hover");
          } catch (e) {
            GLOBAL$BROWSER$.errorTrace(e);
          }
        }
      });
      if (data.length > 0) {
        var datalength = data.length;
        var index = -1;
        $("#" + domId).textbox("textbox").keyup((event: KeyboardEvent) => {
          try {
            const { key } = event;
            const domPanel = $("#" + domId).combobox("panel");
            const panelOptions = domPanel.panel("options");
            const updateIndexAndSetValue = (step: number) => {
              let newIndex = index + step;
              newIndex = Math.max(0, Math.min(newIndex, datalength - 1));
              index = newIndex;
              $("#" + domId).combobox("setValue", data[newIndex][valueField]);
            };

            if (panelOptions.closed) {
              if (key === 'ArrowUp') { // 上箭头
                if (index <= 0) {
                  updateIndexAndSetValue(datalength - 1);
                } else {
                  updateIndexAndSetValue(-1);
                }
              } else if (key === 'ArrowDown') { // 下箭头
                if (index >= datalength - 1 || index === -1) {
                  updateIndexAndSetValue(0);
                } else {
                  updateIndexAndSetValue(1);
                }
              }
            }

            if (key === 'Enter') { // 回车
              if (nextid) {
                $('#' + nextid).textbox("textbox").focus();
              }
              if (dics.method) {
                dics.method(data[index]);
              }
            }
          } catch (error) {
            GLOBAL$BROWSER$.errorTrace(error);
          }
        });
      }

      //校验数据有效性
      $("#" + domId).next().children(":text").blur(function () {
        try {
          var pClosed = $("#" + domId).combobox("panel").panel("options").closed;
          if (pClosed) {
            var textvalue = $("#" + domId).combobox('getText');
            var combodata = $("#" + domId).combobox('getData');
            var idvalue = $("#" + domId).combobox('getValue');
            var setValue = "";

            $.each(combodata, function (i: number, n: any) {
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
            })
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
          GLOBAL$BROWSER$.errorTrace(e);
        }
      })
    })
  } catch (e) {
    GLOBAL$BROWSER$.errorTrace(e);
  }
}
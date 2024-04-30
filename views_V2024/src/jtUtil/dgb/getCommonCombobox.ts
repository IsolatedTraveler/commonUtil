import { filterComboboxData } from "../public/filterComboboxData";
import { dicBlur, dicEvent } from "./getCommonDic";

export function getCommonCombobox({
  domId,
  data = [],
  valueField = 'code',
  textField = 'name',
  mrz = '',
  mrz_index,
  nextid,
  method,
  changemethod,
  flag,
  required,
  filter_arr,
  multiple,
  editable,
  emptofirst,
  readonly
}: any) {
  try {
    const domElem = $('#' + domId),
      dataLen = data.length
      , dicSelect = (record: any) => {
        try {
          if (isselect) {
            if (nextid) {
              $('#' + nextid).textbox("textbox").focus();
            }
            if (method) {
              method(record);
            }
          }
        } catch (e: any) {
          GLOBAL$COMMON$V2024$.alertMsg(e.message || e)
        }
      }
    multiple = Boolean(multiple)
    required = Boolean(required)
    emptofirst = Boolean(emptofirst)
    editable = editable === undefined || Boolean(editable)

    var isselect = true;
    domElem.combobox({
      data,//json格式的数据
      valueField,
      textField,
      required,
      multiple,
      selectOnNavigation: false,
      editable,
      readonly: readonly,
      onLoadSuccess: function () {
        try {
          if (dataLen > 0) {
            if (mrz && mrz != '') {
              if (multiple) {
                domElem.combobox('setValues', mrz);
              } else {
                domElem.combobox('setValue', mrz);
              }
            } else if (mrz_index) {
              domElem.combobox('select', data[0][valueField]);
            }
          }
        } catch (e) {
          GLOBAL$COMMON$V2024$.alertMsg(e);
        }
      },
      filter: function (q: any, row: any) {
        var keys = filter_arr || ['pym', valueField, textField];
        return filterComboboxData(q, row, keys);
      },
      onSelect: dicSelect,
      onChange: function (newValue: any, oldValue: any) {
        try {
          const item = panel.children("div:visible").eq(0);
          item.addClass("combobox-item-hover");
          if (changemethod) {
            changemethod(newValue, oldValue);
          }
        } catch (e) {
          GLOBAL$COMMON$V2024$.alertMsg(e);
        }
      },
      onHidePanel: function () {
        try {
          panel.children("div").removeClass("combobox-item-hover");
        } catch (e) {
          GLOBAL$COMMON$V2024$.alertMsg(e);
        }
      }
    });
    const panel = domElem.combobox("panel"), panelOptions = panel.panel("options")
    dicEvent(domElem, data, valueField, dicSelect, panelOptions)
    dicBlur(domElem, valueField, textField, flag, required, panelOptions, data)
  } catch (e) {
    GLOBAL$COMMON$V2024$.alertMsg(e)
  }
}
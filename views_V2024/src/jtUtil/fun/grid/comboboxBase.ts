import { filterComboboxData } from "../../public/filterComboboxData"
import { comboboxBlurEvent } from "./comboboxBlurEvent"
import { ComboBoxConfig, getPanelIsClose } from "./panel"

export function initializeComboboxBase(param: ComboBoxConfig) {
  try {
    const domId = param.domId || param.domid
    if (!domId) throw new Error('未设定要初始化的元素')
    const domElem = $(`#${domId}`)
    if (!domElem[0]) throw new Error('设定的初始元素未找到')
    const { mrz, mrz_index, valueField, textField, nextid, method, changemethod } = param
      , multiple = Boolean(param.multiple), filter_arr = param.filter_arr || [valueField, textField, 'pym', 'dmmc']
      , required = Boolean(param.required), data = param.data || []
      , dicSelect = (row: any) => {
        try {
          if (isselect) {
            if (nextid) {
              $('#' + nextid).textbox('textbox').focus();
            }
            if (method) {
              method(row);
            }
          }
        } catch (e) {
          GLOBAL$COMMON$V2024$.alertMsg(e)
        }
      }
    var isselect = true;
    domElem.combobox({
      data,
      valueField,
      textField,
      required,
      multiple,
      selectOnNavigation: Boolean(param.selectOnNavigation),
      editable: param.editable,
      readonly: Boolean(param.readonly),
      panelHeight: param.panelHeight,
      onLoadSuccess: (data: any[]) => {
        try {
          if (!data.length) return
          if (mrz || mrz === 0) {
            if (multiple) {
              domElem.combobox('clear')
              domElem.combobox('setValues', mrz)
            } else {
              domElem.combobox('select', mrz)
            }
          } else if (mrz_index) {
            domElem.combobox('select', data[0][valueField])
          }
        } catch (e) {
          GLOBAL$COMMON$V2024$.alertMsg(e)
        }
      },
      filter: function (q: string, row: any) {
        try {
          return filterComboboxData(q, row, filter_arr);
        } catch (e) {
          GLOBAL$COMMON$V2024$.alertMsg(e)
        }
      },
      onSelect: dicSelect,
      onChange: function (newValue: string, oldValue?: string) {
        try {
          const panel = domElem.combobox('panel'),
            item = panel.children('div:visible').eq(0);
          item.addClass('combobox-item-hover');
          if (changemethod) {
            changemethod(newValue, oldValue);
          }
        } catch (e) {
          GLOBAL$COMMON$V2024$.alertMsg(e)
        }
      },
      onHidePanel: function () {
        try {
          const panel = domElem.combobox('panel')
          panel.children("div").removeClass('combobox-item-hover');
        } catch (e) {
          GLOBAL$COMMON$V2024$.alertMsg(e)
        }
      }
    })
    if (data.length > 0) {
      const datalength = data.length
      var index = 0;
      domElem.textbox('textbox').keyup(function (event: KeyboardEvent) {
        try {
          const key = event.key
          const updateIndexAndSetValue = (step: number) => {
            if (getPanelIsClose(domElem)) {
              isselect = false
              index = (index + step + datalength) % datalength; // 使用取模简化边界循环
              domElem.combobox("setValue", data[index][valueField]);
              isselect = true
            }
          };
          if (key === 'ArrowUp') {
            updateIndexAndSetValue(-1);
          } else if (key === 'ArrowDown') {
            updateIndexAndSetValue(1);
          }
          if (key === 'Enter') {
            dicSelect(data[index])
          }
        } catch (e: any) {
          GLOBAL$COMMON$V2024$.alertMsg(e);
        }
      })
    }
    comboboxBlurEvent(domElem, param)
  } catch (e) {
    GLOBAL$COMMON$V2024$.alertMsg(e)
  }
}
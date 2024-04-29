import { dicget } from "../public";
import { filterComboboxData } from "../public/filterComboboxData";
import { filterDicData } from "../public/filterDicData";
/**
 * 初始化通用字典下拉框组件
 * @param {Object} 参数对象，包含以下属性：
 * - domId: 绑定的元素ID
 * - mrz: 初始值
 * - mrz_index: 是否根据索引选择初始值
 * - dicKey: 字典键
 * - flag: 是否允许自定义输入
 * - nextid: 是否焦点转移
 * - changemethod: 值改变时的回调方法
 * - required: 是否必填
 * - valueField: 值对应的字段名，默认'dm'
 * - textField: 显示文本对应的字段名，默认'dmmc'
 * - multiple: 是否多选
 * - addnull: 是否添加全空选项
 * - panelHeight: 下拉面板高度
 * - method: 选择记录后的回调方法
 */
export async function getCommonDic({
  domId,
  mrz,
  mrz_index,
  dicKey,
  flag,
  nextid,
  changemethod,
  required,
  valueField = 'dm',
  textField = 'dmmc',
  multiple,
  addnull,
  panelHeight,
  method
}: any = {}) {
  try {
    const data = await dicget(dicKey).then(filterDicData)
      , domElem = $('#' + domId)
      , dicSelect = (record: any) => {
        try {
          if (nextid) {
            $('#' + nextid).textbox("textbox").focus();
          }
          if (method) {
            method(record);
          }
        } catch (e: any) {
          GLOBAL$LAYER$V2024$.alertMsg(e.message || e)
        }
      }
    flag = flag == '1'
    multiple = Boolean(multiple)
    required = Boolean(required)
    if (addnull === '1' && data.length) {
      data.unshift({ dm: '', mc: '所有', pym: '', dmmc: '所有' });
    }
    const dataLen = data.length
    panelHeight = panelHeight || (dataLen > 10 ? 200 : '');
    domElem.combobox({
      data,
      valueField,
      textField,
      selectOnNavigation: false,
      required,
      panelHeight,
      multiple,
      onLoadSuccess: function () {
        try {
          if (dataLen > 0) {
            if (mrz && mrz != '') {
              domElem.combobox('select', mrz);
            } else if (mrz_index) {
              domElem.combobox('select', data[0][valueField]);
            }
          }
        } catch (e: any) {
          GLOBAL$LAYER$V2024$.alertMsg(e.message || e)
        }
      },
      filter: function (q: string, row: any) {
        var keys = ['dm', 'mc', 'dmmc', 'pym'];
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
        } catch (e: any) {
          GLOBAL$LAYER$V2024$.alertMsg(e.message || e)
        }
      },
      onHidePanel: function () {
        try {
          panel.children("div").removeClass("combobox-item-hover");
        } catch (e: any) {
          GLOBAL$LAYER$V2024$.alertMsg(e.message || e)
        }
      }
    })
    // 初始化后处理事件
    const panel = domElem.combobox("panel"), panelOptions = panel.panel("options")
    dicEvent(domElem, data, valueField, dicSelect, panelOptions)
    dicBlur(domElem, valueField, textField, flag, required, panelOptions, data)
  } catch (e: any) {
    GLOBAL$LAYER$V2024$.alertMsg(e.message || e)
  }
}
function dicEvent($dom: any, data: any, valueField: string, dicSelect: any, panelOptions: any) {
  let datalength = data.length;
  let index = -1;
  if (datalength > 0) {
    $dom.textbox("textbox").keyup((event: KeyboardEvent) => {
      try {
        const key = event.key;
        const updateIndexAndSetValue = (step: number) => {
          index = (index + step + datalength) % datalength; // 使用取模简化边界循环
          $dom.combobox("setValue", data[index][valueField]);
        };
        if (panelOptions.closed) {
          if (key === 'ArrowUp') {
            updateIndexAndSetValue(-1);
          } else if (key === 'ArrowDown') {
            updateIndexAndSetValue(1);
          }
        }
        if (key === 'Enter') {
          dicSelect(data[index])
        }
      } catch (e: any) {
        GLOBAL$LAYER$V2024$.alertMsg(e.message || e);
      }
    });
  }
}
function dicBlur($dom: any, valueField: string, textField: string, flag: Boolean, required: Boolean, panelOptions: any, combodata: any[]) {
  $dom.next().children(":text").blur(() => {
    try {
      const pClosed = panelOptions.closed;
      if (pClosed) {
        const textvalue = $dom.combobox('getText');
        const idvalue = $dom.combobox('getValue');
        const match = combodata.find((n: any) => n[textField] === textvalue);
        const setValue = match ? match[valueField] : (flag ? textvalue : "");

        if (setValue !== idvalue || setValue === "") {
          $dom.combobox("setValue", setValue);
          if (flag) {
            $dom.combobox("setText", textvalue);
          }
          if (required && !$dom.combobox("getText")) {
            // 重新聚焦逻辑可以根据需要决定是否启用
          }
        }
      }
    } catch (e: any) {
      GLOBAL$LAYER$V2024$.alertMsg(e.message || e);
    }
  })
}
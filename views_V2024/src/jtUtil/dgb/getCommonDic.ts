import { filterComboboxData } from "../public/filterComboboxData";
import { filterDicData } from "../public/filterDicData";
import { dicBlur, dicEvent } from "./getCommonCombobox";
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
  domid: domId,
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
    const data = await GLOBAL$COMMON$V2024$.dicget(dicKey).then(filterDicData)
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
          GLOBAL$COMMON$V2024$.alertMsg(e)
        }
      }
    flag = flag == '1'
    multiple = Boolean(multiple)
    required = Boolean(required)
    if (addnull === '1' && data.length) {
      data.unshift({ dm: '', mc: '所有', pym: '', dmmc: '所有' });
    }
    const dataLen = data.length
    panelHeight = panelHeight || (dataLen > 10 ? 200 : undefined);
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
          GLOBAL$COMMON$V2024$.alertMsg(e)
        }
      },
      filter: function (q: string, row: any) {
        var keys = ['dm', 'mc', 'dmmc', 'pym'];
        return filterComboboxData(q, row, keys);
      },
      onSelect: dicSelect,
      onChange: function (newValue: any, oldValue: any) {
        try {
          const panel = domElem.combobox("panel")
          const item = panel.children("div:visible").eq(0);
          item.addClass("combobox-item-hover");
          if (changemethod) {
            changemethod(newValue, oldValue);
          }
        } catch (e: any) {
          GLOBAL$COMMON$V2024$.alertMsg(e)
        }
      },
      onHidePanel: function () {
        try {
          const panel = domElem.combobox("panel")
          panel.children("div").removeClass("combobox-item-hover");
        } catch (e: any) {
          GLOBAL$COMMON$V2024$.alertMsg(e)
        }
      }
    })
    // 初始化后处理事件
    dicEvent(domElem, data, valueField, dicSelect)
    dicBlur(domElem, valueField, textField, flag, required, data)
  } catch (e: any) {
    GLOBAL$COMMON$V2024$.alertMsg(e)
  }
}
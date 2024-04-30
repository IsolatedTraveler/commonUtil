import { ComboBoxConfig, initializeComboboxBase } from "../fun";
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
export async function getCommonDic(param: ComboBoxConfig) {
  try {
    if (!param.dicKey) throw new Error('未设置要查询的字典信息')
    const data = await GLOBAL$COMMON$V2024$.dicget(param.dicKey).then(filterDicData), dataLen = data.length
    if (dataLen) return
    param.flag = param.flag == '1'
    param.valueField = param.valuefield || 'dm'
    param.textField = param.textfield || 'dmmc'
    param.panelHeight = param.panelHeight || (dataLen > 10 ? 200 : undefined)
    if (param.addnull == 1) {
      data.unshift({ dm: '', mc: '所有', pym: '', dmmc: '所有' });
    }
    initializeComboboxBase(param)
  } catch (e: any) {
    GLOBAL$COMMON$V2024$.alertMsg(e)
  }
}
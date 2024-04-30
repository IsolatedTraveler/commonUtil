import { ComboBoxConfig, getPanelIsClose } from "./panel";

export function comboboxBlurEvent($dom: any, { valueField, textField, editable, flag, emptofirst }: ComboBoxConfig) {
  try {
    $dom.next().children(":text").blur(() => {
      try {
        if (!editable || !getPanelIsClose($dom)) return; // 快速退出不符合条件的情况
        const combodata = $dom.combobox('getData');
        if (!combodata.length) return; // 无数据直接返回
        const textvalue = $dom.combobox('getText');
        const idvalue = $dom.combobox('getValue');
        const match = combodata.find((n: any) => n[textField] === textvalue);
        const setValue = match ? match[valueField] : (flag ? textvalue : "");
        if (emptofirst && setValue === "") {
          $dom.combobox("setValue", combodata[0][valueField]);
        } else if (setValue !== idvalue || setValue === "") {
          $dom.combobox("setValue", setValue);
        }
      } catch (e: any) {
        GLOBAL$COMMON$V2024$.alertMsg(e);
      }
    })
  } catch (e: any) {
    GLOBAL$COMMON$V2024$.alertMsg(e)
  }
}
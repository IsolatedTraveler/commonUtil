import { filterComboboxData } from "../public/filterComboboxData";
interface ComboBoxConfig {
  domid: string
  domId: string
  data: any[]
  valueField: string
  valuefield: string
  textField: string
  textfield: string
  required: boolean
  multiple: boolean
  selectOnNavigation: boolean
  editable: boolean
  readonly: boolean
  panelHeight?: number
  emptofirst?: boolean
  mrz?: string
  mrz_index?: number
  nextid?: string
  method?: Function
  changemethod?: Function
  flag?: boolean
  filter_arr?: string[]
}
export function initializeComboboxBase(param: ComboBoxConfig) {
  try {
    const domId = param.domId || param.domid
    if (!domId) throw '未设定要初始化的元素'
    const domElem = $(`#${domId}`)
    domElem.combobox({
      data: param.data || [],
      valueField: param.valueField,
      textField: param.textField,
      required: Boolean(param.required),
      multiple: Boolean(param.multiple),
      selectOnNavigation: Boolean(param.selectOnNavigation),
      editable: param.editable,
      readonly: Boolean(param.readonly),
      panelHeight: param.panelHeight,
      onLoadSuccess: () => {

      }
    })
  } catch (e) {
    GLOBAL$COMMON$V2024$.alertMsg(e)
  }
}
export function getCommonCombobox(param: ComboBoxConfig) {
  try {

    param.valueField = param.valuefield || 'code'
    param.textField = param.textfield || 'name'
    param.editable = param.editable === undefined || param.editable === null || !!param.editable
    param.selectOnNavigation = false
    const emptofirst = Boolean(param.emptofirst)
    var isselect = true;
    initializeComboboxBase(param)
  } catch (e) {
    GLOBAL$COMMON$V2024$.alertMsg(e)
  }
}

export function dicEvent($dom: any, data: any, valueField: string, dicSelect: any) {
  try {
    let datalength = data.length;
    let index = -1;
    if (datalength > 0) {
      $dom.textbox("textbox").keyup((event: KeyboardEvent) => {
        // try {
        //   const key = event.key, panel = $dom.combobox("panel"), panelOptions = panel.panel("options")
        //   const updateIndexAndSetValue = (step: number) => {
        //     index = (index + step + datalength) % datalength; // 使用取模简化边界循环
        //     $dom.combobox("setValue", data[index][valueField]);
        //   };
        //   if (panelOptions.closed) {
        //     if (key === 'ArrowUp') {
        //       updateIndexAndSetValue(-1);
        //     } else if (key === 'ArrowDown') {
        //       updateIndexAndSetValue(1);
        //     }
        //   }
        //   if (key === 'Enter') {
        //     dicSelect(data[index])
        //   }
        // } catch (e: any) {
        //   GLOBAL$COMMON$V2024$.alertMsg(e);
        // }
      });
    }
  } catch (e: any) {
    GLOBAL$COMMON$V2024$.alertMsg(e)
  }
}
export function dicBlur($dom: any, valueField: string, textField: string, flag: Boolean | undefined, required: Boolean, combodata: any[]) {
  try {
    $dom.next().children(":text").blur(() => {
      try {
        const panel = $dom.combobox("panel"), panelOptions = panel.panel("options")
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
        GLOBAL$COMMON$V2024$.alertMsg(e);
      }
    })
  } catch (e: any) {
    GLOBAL$COMMON$V2024$.alertMsg(e)
  }
}
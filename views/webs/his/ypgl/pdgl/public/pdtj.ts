import { pdtjReject, pdtjResolve } from "../var";
function getInputChecked(arr: HTMLInputElement[]): string[] {
  return [].filter.call(arr, (el: HTMLInputElement) => {
    return el.checked
  }).map((el: HTMLInputElement) => el.value)
}
export function closePdtj() {
  $('#pdgl_edit').dialog('close');
  pdtjReject()
}
export function submitPdtj() {
  if ($('#pdszform').form('validate')) {
    const user = GLOBAL$USER$.getUser()
    if ((w as any).handleUtil.saveBdczjlhc(user.jgid, user.ryid, 1, 0)) {
      return pdtjResolve({
        pxgz: getInputChecked(document.getElementsByName('pxgz') as any)[0]
        , pdlx: getInputChecked(document.getElementsByName('pdlx') as any)[0]
        , pylx: getInputChecked(document.getElementsByName('pylx') as any).join(',')
        , pdsj: $('#pdsj').maskbox('getValue')
        , ksid: $('#pdkf').combobox('getValue')
      })
    }
  } else {
    w.commonUtil.openMsgBox('提示', "请先完成盘点设置", 0)
  }
  pdtjReject()
}
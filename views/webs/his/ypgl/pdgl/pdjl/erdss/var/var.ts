export interface PdtjResolve {
  pxgz: string
  pdlx: string
  pylx: string
  pdsj: string
  ksid: string
}
export var pdtjResolve: (value: PdtjResolve) => void, pdtjReject: (reason?: any) => void
  , inputFile: HTMLInputElement
function clearInputCheck(arr: HTMLInputElement[]) {
  arr.forEach(el => {
    el.checked = false
  })
}
export function setPdtj(bmid: string): Promise<PdtjResolve> {
  return new Promise((resolve, reject) => {
    // 设置盘点条件
    $("#pdkf").combobox('setValue', bmid)
    $("#pdsj").maskbox({ value: new Date().format('yyyy-MM-dd hh:mm:ss') })
    clearInputCheck(document.getElementsByName('pdlx') as any)
    clearInputCheck(document.getElementsByName('pylx') as any)
    clearInputCheck(document.getElementsByName('pxgz') as any)
    $("#pdgl_edit").dialog("open");
    $("#pdkf").textbox("textbox").focus();
    pdtjReject = reject
    pdtjResolve = resolve
  })
}
export function setInputeFile() {
  if (!inputFile) {
    inputFile = document.createElement('input')
    inputFile.setAttribute('type', 'file')
  }
  return GLOBAL$FILE$.uploadInputFile(inputFile)
}

export function showxtcs(mkbh: string) {
  return new Promise((resolve, reject) => {
    var res = GLOBAL$BROWSER$.getSystemVal("showxtcs", [mkbh])
    resolve(res)
  })
}
export function openMsgBox(title: string, msg: string, button: any, type: any) {
  return new Promise((resolve, reject) => {
    var result = GLOBAL$BROWSER$.getSystemVal("showmsgbox", [title, msg, button, type])
    var data = JSON.parse(result).data;
    resolve(data.result);
  })
}
export function closeWindow(num = 0) {
  GLOBAL$BROWSER$.getSystemVal('closeWindow', [num])
}
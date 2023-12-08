
export function showxtcs(mkbh: string) {
  return new Promise((resolve, reject) => {
    var res = system.showxtcs(mkbh)
    resolve(res)
  })
}
export function openMsgBox(title: string, msg: string, button: any, type: any) {
  return new Promise((resolve, reject) => {
    var result = system.showmsgbox(title, msg, button, type);
    var data = JSON.parse(result).data;
    resolve(data.result);
  })
}
export function closeWindow(num = 0) {
  getSystemVal('closeWindow', [num])
}
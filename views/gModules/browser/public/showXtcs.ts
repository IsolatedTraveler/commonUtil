import { system } from "../../../g-lobal/allVar"

export function showxtcs(mkbh: string) {
  return new Promise((resolve, reject) => {
    var res = GLOBAL$BROWSER$.getSystemVal("showxtcs", [mkbh])
    resolve(res)
  })
}
export function openMsgBox(title: string, msg: string, button: any, type: any) {
  return new Promise((resolve, reject) => {
    if (system) {
      var data = JSON.parse(system.showmsgbox(title, msg, button, type)).data;
      resolve(data.result);
    }
  })
}
export function closeWindow(num = 0) {
  GLOBAL$BROWSER$.getSystemVal('closeWindow', [num])
}
import { system } from "../var";

export function openMsgBox(title: string, msg: string, button: any, type: any) {
  return new Promise((resolve, reject) => {
    if (system) {
      var data = JSON.parse(system.showmsgbox(title, msg, button, type)).data;
      resolve(data.result);
    }
  })
}
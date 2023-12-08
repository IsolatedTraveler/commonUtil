import { alertMsg } from "../../layer";
import { commonUtilName } from "../var";

export function redirect(a: any, pid: string, id: string, title: string, url: string, data: any) {
  a.onload = function () {
    if (a && a[commonUtilName]) {
      a[commonUtilName].router(pid, id, title, url, data);
    }
    else {
      alertMsg(`打开页面未引入${commonUtilName}公共组件`);
    }
  }
}
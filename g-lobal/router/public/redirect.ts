import { alertMsg } from "../../layer";
import { commonUtilName } from "../var";

export function redirect(a: Window, pid: string, id: string, title: string, url: string, data: any) {
  a.onload = function () {
    if (a && (a as any).xtcd && (a as any).xtcd.router) {
      (a as any).xtcd.router(pid, id, title, url, data);
    }
    else {
      alertMsg(`打开页面未找到路由方法`);
    }
  };
}
import { alertMsg } from "../../layer";
import { system } from "../var";

export function errorTrace(exception: any) {
  alertMsg(exception.message);
  //调用浏览器方法记录日志
  if (system) {
    system.log(exception.stack)
  } else {
    console.log(exception.stack)
  }
}
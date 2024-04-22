import { system } from "../var";
import { errorTrace } from "./errorTrace";

export function openDialog(url: string, data: any, width: string, height: string) {
  try {
    if (url.indexOf("xtcs.html") > -1) {
      var mkbh = that.setVar("cssz", "mkbh");
      return system.showxtcs(mkbh);
    } else {
      return system.showdialog(url, data, width, height);
    }
  } catch (e) {
    errorTrace(e);
  }
}
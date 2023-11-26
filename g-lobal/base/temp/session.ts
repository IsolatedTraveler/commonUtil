import { tempData } from "../../../src/commonUtil/public/fun/deeps";
import { system } from "../../var";
import { getBrowserParam, setBrowserParam } from "../browser";

export function session(name, val = undefined, mkdm = 'that') {
  if (system) {
    if (val === undefined) {
      val = getBrowserParam(mkdm, name);
      return val;
    } else {
      setBrowserParam(mkdm, name, val);
    }
  } else {
    return tempData(name, val, sessionStorage)
  }
}
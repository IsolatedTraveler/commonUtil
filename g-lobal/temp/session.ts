import { system } from "../allVar";
import { getBrowserParam, setBrowserParam } from "../browser/public/data";
import { tempData } from "./tempData";

export function session(name: string, val: any = undefined, mkdm = 'that') {
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
import { DzpjKpJgid } from "../../type";
import { dzpjKpConfig } from "../var";
import { getDzpjConfig } from "./getDzpjConfig";
import { setKpJgConfig } from "./setKpJgConfig";

export function getDzpjKpJgConfig(jgid: DzpjKpJgid) {
  return dzpjKpConfig[jgid] = Promise.all([setKpJgConfig(jgid), getDzpjConfig(jgid)]).then(res => res[0])
}
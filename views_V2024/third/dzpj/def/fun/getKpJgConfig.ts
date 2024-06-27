import { KpJgid } from "../../type";
import { kpConfig } from "../var";
import { getDzpjConfig } from "./getDzpjConfig";
import { setKpJgConfig } from "./setKpJgConfig";

export function getKpJgConfig(jgid: KpJgid) {
  return kpConfig[jgid] = Promise.all([setKpJgConfig(jgid), getDzpjConfig(jgid)]).then(res => res[0])
}
import { system } from "../../var";

export function getSystemVal(name, param = []) {
  return system[name](...param)
}
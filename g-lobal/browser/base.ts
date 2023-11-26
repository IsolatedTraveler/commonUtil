import { system } from "../var";

export function getSystemVal(name: string, param = []) {
  return system[name](...param)
}
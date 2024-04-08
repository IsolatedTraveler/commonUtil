import { tempData } from "./tempData";

export function local(name: string, val: any) {
  return tempData(name, val, localStorage)
}
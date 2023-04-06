import { closeZzc, openZzc } from "../other/zzc";
import { rowUpdate } from "../val/rowUpdate";

export function updateRow(d, i) {
  openZzc()
  return rowUpdate(d, i).finally(closeZzc)
}
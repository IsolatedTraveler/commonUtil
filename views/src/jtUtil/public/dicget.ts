import { dics } from "../var";

export function dicget(fldm: string) {
  if (!dics[fldm]) {
    dics[fldm] = GLOBAL$AJAX$.commonHttppost('/magic/yy10-ywjc/01/10/s-tyzd', { fldm }).data.list || []
  }
  return dics[fldm]
}
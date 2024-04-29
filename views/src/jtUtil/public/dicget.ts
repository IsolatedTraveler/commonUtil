import { dics } from "../var";

export function dicget(fldm: string) {
  if (!dics[fldm]) {
    return dics[fldm] = GLOBAL$AJAX$.commonQueryAsyncHttppost_callback('/magic/yy10/01/10/s-tyzd', { fldm }).then(res => res.data.list)
  }
  return dics[fldm]
}
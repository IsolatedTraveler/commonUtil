import { setPdtj } from "../var";
import { validateWarehouse } from "./validate";

export function judgePd() {
  const bmid = $('#ksid').combobox('getValue')
  return validateWarehouse(bmid).then(setPdtj)
}
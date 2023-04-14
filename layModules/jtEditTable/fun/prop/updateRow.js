/* eslint-disable no-unused-vars */
import { data, forbidAdd} from "../../var/index";
import { fixedPosition } from "../other/fixedPosition";
import { getTrIndex } from "../other/getElem";
import { rowUpdate } from "../reload/updateRow";

export function updateRow(d, i) {
  return getTrIndex(i, '未获取到要更新的行').then(i => {
    return rowUpdate(d,i)
  })
}
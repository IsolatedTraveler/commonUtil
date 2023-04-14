import { forbidAdd, selected_tr, third_layer, data, primaryCol } from "../../var/index";
import { getTrIndex } from "../other/getElem";
import { rowDel } from "../reload/delRow";
import { rowUpdate } from "../reload/updateRow";

export function delRow(i) {
  if (selected_tr || i !== undefined) {
    return getTrIndex(i, '未获取选中行').then(() => {
      if (i == data.length - 1 && !forbidAdd && data[i][primaryCol]) {
        return rowUpdate({}, i)
      }
      return rowDel(i)
    })
  } else {
    third_layer.alert('未获取到当前操作行', function (i) {
      third_layer.close(i)
    })
    return Promise.reject()
  }
}
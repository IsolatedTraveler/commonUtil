import { judgePd } from "../fun"
import { expInventoryCols, expInventoryHead } from "../var"

export function exportInventoryDetails() {
  // 校验当前库房是否可以盘点
  return judgePd().then((res) => {
    // 获取盘点明细数据
    return GLOBAL$AJAX$.commonQueryAsyncHttppost_callback('/rest/queryDataBySql/010603/3', { jgid: GLOBAL$USER$.getUser().jgid, ...res }).then(({ code, data, message }) => {
      // 导出盘点明细
      if (code === GLOBAL$AJAX$.ajaxSuccessCode && data && data.length) {
        $('#pdgl_edit').dialog('close')
        setTimeout(() => {
          data[0] = Object.assign(data[0], res)
          GLOBAL$XLSX$.expExcel({ data, title: '盘点明细', cols: expInventoryCols, head: expInventoryHead }, 2)
        }, 0);
      } else {
        return Promise.reject({ code: GLOBAL$AJAX$.ajaxErrorCode, message: message || '未获取到明细记录' })
      }
    }).catch(({ message }) => {
      $('#pdgl_edit').dialog('close')
      GLOBAL$LAYER$.alertMsg(message)
    })
  })
}
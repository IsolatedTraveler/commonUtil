import { judgePd } from "../fun"

export function exportInventoryDetails() {
  // 校验当前库房是否可以盘点
  return judgePd().then((res) => {
    // 获取盘点明细数据
    return GLOBAL$AJAX$.commonQueryAsyncHttppost_callback('/rest/queryDataBySql/010603/3', { jgid: GLOBAL$USER$.getUser().jgid, ...res }).then(({ code, data, message }) => {
      // 导出盘点明细
      if (code === GLOBAL$AJAX$.ajaxSuccessCode) {

      }
    })
  })
}
// eslint-disable-next-line no-unused-vars
import { colSelectKey, cols, tableSelectKey, qTable } from "../var/index";
function initTable() {
  const zb = {
    elem: '#table',
    select: '#cx',
    data: [],
    cols
  }
  qTable = commonUtil.initQueryPage(zb)
}
export function dealData() {
  commonUtil.setSelectOption({
    elem: '[name=zb],[name=fjb]',
    data: tableSelectKey
  })
  commonUtil.setSelectOption({
    elem: '[name=col]',
    data: colSelectKey
  })
  initTable()
}
import { colSelectKey, tableSelectKey } from "../var/index";

export function dealData() {
  commonUtil.setSelectOption({
    el: '[name=zb],[name=fjb]',
    data: tableSelectKey
  })
  commonUtil.setSelectOption({
    el: '[name=col]',
    data: colSelectKey
  })
}
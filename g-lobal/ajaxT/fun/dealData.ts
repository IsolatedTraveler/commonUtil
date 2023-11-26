import { AjaxRequestOption, ajaxResposeData, ajaxResposeJudge } from "../type";

export function ajaxError({ message, i }: ajaxResposeJudge, { msg, isShowLoad }: AjaxRequestOption, res: ajaxResposeData) {
  isShowLoad && 1
  if (msg) {
    // 提示
  }
  return res
}
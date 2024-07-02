import { bbPrint, confirmMsg } from "../../../../g-lobal"
import { DzpjKpIsPrint, DzpjKpPrintParam } from "../../type"
/**
 * 控制打印策略
 * 
 * @function isPrintPz
 * @param {string | undefined} bbid - 打印任务ID，用于识别特定的打印任务。
 * @param {any} data - 打印所需的数据，具体结构依赖于打印任务需求。
 * @param {DzpjKpIsPrint} isPrint - 打印策略，可选值为 '是'、'否' 或 '提示'。
 * @param {string} msg - 当打印策略为 '提示' 时，显示给用户的提示消息。
 * @param {DzpjKpPrintParam} printParam - 打印参数，用于控制打印行为的额外参数。
 * 
 * 根据`isPrint`参数决定是否执行打印操作。如果`isPrint`为'是'，则直接执行打印。如果为'提示'，则显示确认对话框，用户可以选择'是'或'否'，选择'是'时执行打印。如果`isPrint`为'否'或`bbid`未定义，则不执行任何打印操作。
 * 
 * 注意：此函数依赖于外部的`confirmMsg`和`bbPrint`函数，它们分别用于显示确认对话框和执行打印任务。
 */
export function isPrintPz(bbid: string | undefined, data: any, isPrint: DzpjKpIsPrint, msg: string = '', printParam?: DzpjKpPrintParam) {
  if (bbid) {
    if (isPrint == '提示') {
      return confirmMsg(msg, ['是', '否']).then(() => {
        return bbPrint(bbid, data, printParam)
      })
    } else if (isPrint == '是') {
      return Promise.resolve(bbPrint(bbid, data, printParam))
    }
  }
  return Promise.resolve()
}
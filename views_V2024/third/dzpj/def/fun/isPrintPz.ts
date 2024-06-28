import { bbPrint, confirmMsg } from "../../../../g-lobal"
import { DzpjKpIsPrint, DzpjKpPrintParam } from "../../type"

export function isPrintPz(bbid: string | undefined, data: any, isPrint: DzpjKpIsPrint, msg: string, printParam: DzpjKpPrintParam) {
  if (bbid) {
    if (isPrint == '提示') {
      confirmMsg(msg, ['是', '否']).then(() => {
        bbPrint(bbid || '', data, printParam)
      })
    } else if (isPrint == '是') {
      bbPrint(bbid || '', data, printParam)
    }
  }
}
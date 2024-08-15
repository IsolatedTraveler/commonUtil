import { bindSelectClick } from "../../../../g-lobal/dom/public";
import { boxInput, selectElemConfig, valInput } from "../var";
import { boxClick } from "./boxClick";
import { jtAddInput } from "./jtAddInput";
export function bindEvent() {
  (valInput[0] as any).jtAddInput = jtAddInput;
  (valInput[0] as any).jt = that;
  selectElemConfig.type === 'select' ? bindSelectClick(boxInput) : boxInput.on('click', boxClick)
}
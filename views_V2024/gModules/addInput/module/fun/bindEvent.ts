import { bindSelectClick } from "../../../../g-lobal/dom/public";
import { boxInput, selectElemConfig, valInput } from "../var";
import { boxClick } from "./boxClick";
import { jtAddInput } from "./jtAddInput";

export function bindEvent() {
  (valInput[0] as any).jtAddInput = jtAddInput;
  selectElemConfig ? bindSelectClick(boxInput) : boxInput.on('click', boxClick)
}
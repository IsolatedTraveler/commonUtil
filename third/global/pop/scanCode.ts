import { singlePopContentElem } from "../var";
import { layer, layerContent } from "./layer";

export function scanCode() {
  layerContent('扫码', '<p>请扫码获取最新数据：</p><input/>', ['取消'])
  layer(singlePopContentElem)
}
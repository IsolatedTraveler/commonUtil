import { layerIndex, third_layer, zzc_arr } from "../../var/index";

// 遮罩层
export function openZzc() {
  zzc_arr.push(true)
  if (layerIndex === undefined) {
    layerIndex = commonUtil.layerLoading()
  }
}
export function closeZzc() {
  zzc_arr.pop()
  if (layerIndex !== undefined && !zzc_arr.length) {
    third_layer.close(layerIndex)
    layerIndex = undefined
  }
}
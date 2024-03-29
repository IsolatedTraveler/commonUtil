import { layerIndex, third_layer, zzc_arr } from "../../var/index";

// 遮罩层
export function openZzc(name) {
  console.warn('open ' + name)
  zzc_arr.push(name || true)
  if (layerIndex === undefined) {
    layerIndex = commonUtil.layerLoading()
  }
}
export function closeZzc(name) {
  console.warn('close ' + name)
  zzc_arr.pop()
  if (layerIndex !== undefined && !zzc_arr.length) {
    third_layer.close(layerIndex)
    layerIndex = undefined
  }
}
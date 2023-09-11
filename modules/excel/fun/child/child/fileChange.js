import { layerIndex } from "../../../var/global"

export function fileChange(e) {
  return Promise.all([].map.call(e.target.files, (it) => it)).then(() => { }).finally(() => {
    layer.close(layerIndex)
  })
}
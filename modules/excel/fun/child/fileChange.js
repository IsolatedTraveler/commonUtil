import { layerIndex } from "../../var/global"

export function fileChange(e) {
  return Promise.all([].map.call(e.target.files, (it) => {
    console.log(it.name)
  })).then(() => { }).finally(() => {
    layer.close(layerIndex)
  })
}
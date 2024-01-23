import { layerClose } from "../../../global/pop/layer"
import { scanCode } from "../../../global/pop/scanCode"
import { readJkkInfoReject } from "../var"
import { readJkkInfoByMagic } from "./readJkkInfoByMagic"

export function enterJkkNumber() {
  scanCode().then(({ code, data }) => {
    if (code == -1) {
      readJkkInfoByMagic(data).finally(layerClose)
    } else {
      layerClose()
      readJkkInfoReject(new Error('用户取消扫码操作'))
    }
  })
}